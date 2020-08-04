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

    public static function filerNonStaticRooms(array &$roomsData, $staticRoomsCode): void
    {
        foreach ($roomsData as $roomDataKey => $roomData) {
            foreach ($staticRoomsCode as $staticRoomCode) {
                if ($roomData['code'] === $staticRoomCode) {
                    unset($roomsData[$roomDataKey]);
                }
            }
        }
    }
}
