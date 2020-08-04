<?php

namespace App\Repository;

use Illuminate\Support\Facades\Storage;
use App\Services\RoomService;

class RoomRepository
{
    const START_ROOM_CODE = 'entree_du_donjon_1';
    const END_ROOM_CODE = 'salle_du_boss_1';

    public static function getRoomsData(): array
    {
        return $roomsData = json_decode(Storage::disk('private')->get('room_data.json'), true);
    }

    public static function getRandomStartRoomAction(): array
    {
        $roomsData = self::getRoomsData();
        RoomService::filerStartRoomActions($roomsData);
        RoomService::filerNonStaticRooms($roomsData, [self::START_ROOM_CODE, self::END_ROOM_CODE]);

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

    public static function getStartRoom(): array
    {
        return self::getRoomActionByCode(self::START_ROOM_CODE);
    }

    public static function getEndRoom(): array
    {
        return self::getRoomActionByCode(self::END_ROOM_CODE);
    }
}
