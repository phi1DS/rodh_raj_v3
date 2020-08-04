<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repository\RoomRepository;

class ApiV1RoomController extends Controller
{
    public function getRandomRoom()
    {
        return RoomRepository::getRandomStartRoomAction();
//        return RoomRepository::getRoomActionByCode('les_bureaux_du_donjon_1');
//        return RoomRepository::getRoomActionByCode('salle_au_tresor_1');
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
