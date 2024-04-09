<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TerminalResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'code' => $this->code,
            'number' => $this->number,
            'supplier' => $this->supplier,
            'title' => $this->title,
            'created_at' => (new Carbon($this->created_at, 'Europe/Moscow'))->format('d.M.Y H:i:s'),
            'updated_at' => (new Carbon($this->updated_at, 'Europe/Moscow'))->format('d.M.Y H:i:s'),
        ];
    }
}
