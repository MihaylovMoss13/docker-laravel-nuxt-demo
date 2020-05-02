<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Category extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'key'   => $this->key,
            'name'  => $this->name,
            'color' => $this->color,
            'style' => json_decode($this->style, true),
            'count' => $this->count,
        ];
    }
}
