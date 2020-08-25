<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repository\RoomRepository;

class ApiV1RoomController extends Controller
{
    public function getRandomRoom()
    {
        return RoomRepository::getRandomStartRoomAction();
//        return RoomRepository::getRoomActionByCode('salle_des_potions_1'); // debug specific room
    }

    public function getStartRoom()
    {
        return RoomRepository::getStartRoom();
    }

    public function getEndRoom()
    {
        return RoomRepository::getEndRoom();
    }

    public function getRoomAction($code)
    {
        return RoomRepository::getRoomActionByCode($code);
    }
}
