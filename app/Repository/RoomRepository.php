<?php

namespace App\Repository;

use Illuminate\Support\Facades\Storage;
use App\Services\RoomService;

class RoomRepository
{
    const START_ROOM_ID = 'roomAction1_1';
    const END_ROOM_ID = 'roomAction_boss_1';

    public static function getRoomsData(): array
    {
        return $roomsData = json_decode(Storage::disk('private')->get('room_data.json'), true);
    }

    public static function getRandomStartRoomAction(): array
    {
        $roomsData = self::getRoomsData();
        RoomService::filerStartRoomActions($roomsData);
        RoomService::filerNonStaticRooms($roomsData, [self::START_ROOM_ID, self::END_ROOM_ID]);

        return [$roomsData[array_rand($roomsData, 1)]];
    }

    public static function getRoomActionByCode(string $code): array
    {
        $roomsData = self::getRoomsData();

        foreach ($roomsData as $roomData) {
            if ($roomData['code'] === $code) {
                return [$roomData];
            }
        }

        return [];
    }

    public static function getRoomActionById($staticRoomId): array
    {
        $roomsData = self::getRoomsData();

        foreach ($roomsData as $roomId => $roomData) {
            if ($roomId === $staticRoomId) {
                return [$roomData];
            }
        }

        return [];
    }

    public static function getStartRoom(): array
    {
        return self::getRoomActionById(self::START_ROOM_ID);
    }

    public static function getEndRoom(): array
    {
        return self::getRoomActionById(self::END_ROOM_ID);
    }
}
