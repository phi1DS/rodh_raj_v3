<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repository\RoomRepository;

class ApiV1RoomTestController extends Controller
{
    public function getTreasureRoom()
    {
        return RoomRepository::getRoomActionByCode('salle_au_tresor_1'); // debug specific room
    }
}
