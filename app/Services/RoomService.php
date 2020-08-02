<?php

namespace App\Services;

class RoomService
{
    public static function filerStartRoomActions(array &$roomsData): void
    {
        $startRoomAction = [];

        foreach ($roomsData as $room) {
            if (isset($room['isStartRoomAction'])) {
                $startRoomAction[] = $room;
            }
        }

        $roomsData = $startRoomAction;
    }

    public static function filerNonStaticRooms(array &$roomsData, $staticRoomsIds): void
    {
        $nonStaticRooms = [];

        foreach ($roomsData as $roomId => $roomData) {
            foreach ($staticRoomsIds as $staticRoomsId) {
                if ($roomId !== $staticRoomsId) {
                    $nonStaticRooms[] = $roomData;
                }
            }
        }

        $roomsData = $nonStaticRooms;
    }
}
