<?php

namespace App\JsonApi\Boards;

use Neomerx\JsonApi\Schema\SchemaProvider;

class Schema extends SchemaProvider
{

    /**
     * @var string
     */
    protected $resourceType = 'boards';

    /**
     * @param \App\Board $resource
     *      the domain record being serialized.
     * @return string
     */
    public function getId($resource)
    {
        return (string) $resource->getRouteKey();
    }

    /**
     * @param \App\Board $resource
     *      the domain record being serialized.
     * @return array
     */
    public function getAttributes($resource)
    {
        return [
            'board' => $resource->board,
            'dimensions' => $resource->dimensions,
            'seconds' => $resource->seconds,
            'createdAt' => $resource->created_at,
            'updatedAt' => $resource->updated_at,
        ];
    }
}
