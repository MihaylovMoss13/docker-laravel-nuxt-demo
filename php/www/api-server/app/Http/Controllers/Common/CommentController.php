<?php

namespace App\Http\Controllers\Common;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Vinkla\Hashids\Facades\Hashids;

class CommentController extends Controller
{
    /**
     * @group Common-Comment
     * 文章评论-列表
     *
     * @urlParam uuid string required 文章的uuid
     * @bodyParam page int 页数
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $page     = $request->page ?? 1;

        $article = Article::where('id', Hashids::decode($request->uuid))->first();
        if (empty($article->id)) {
            return response()->json([
                'error_code' => 1,
                'message'    => '数据不存在',
            ], 404);
        }

        $list = Comment::where('article_id', $article->id)
            ->paginate(10, ['*'], 'page', $page);
            // ->offset(10*($page-1))
            // ->limit(10)
            // ->get();
        $list->withPath('');
        return \App\Http\Resources\Comment::collection($list);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * @group Common-Comment
     * 文章评论-用户发表评论
     *
     * @bodyParam nickname string required 用户留的昵称
     * @bodyParam email email 用户留的邮箱
     * @bodyParam content string required 评论内容
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nickname' => 'required|string|min:3',
            'email'    => 'nullable|email|min:5',
            'content'  => 'required|string|min:5',
        ]);

        $article = Article::where('id', Hashids::decode($request->uuid))->first();
        if (empty($article->id)) {
            return response()->json([
                'error_code' => 1,
                'message'    => '数据不存在',
            ], 404);
        }

        DB::beginTransaction();
        try {
            $comment             = new Comment;
            $comment->article_id = $article->id;
            $comment->nickname   = $request->nickname;
            if (!empty($request->email)) {
                $article->email = $request->email;
            }
            $comment->content = htmlspecialchars($request->content);
            $comment->ip = $request->ip();
            $comment->save();

            $article->comments += 1;
            $article->save();
            DB::commit();
        } catch (QueryException $e) {
            DB::rollBack();
            return response()->json([
                'error_code' => 2,
                'message'    => '未知错误，操作失败',
            ], 400);
        }

        $comment->refresh();
        return new \App\Http\Resources\Comment($comment);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
