<template>
    <div class="w-64 bg-white h-screen shadow-md">
        <div class="p-4 flex items-center">
            <img alt="Admicro logo" class="mr-2" height="40"
                 src="https://storage.googleapis.com/a1aa/image/Aag1ByD1n2iS3iBI0Tgl9oTKdQ6b88uE3038_Vb2iLs.jpg" width="40"/>
            <span class="text-xl font-bold">admicro</span>
        </div>
        <nav class="mt-4">
            <ul>
                <li class="pt-4 pb-4 px-4 py-2 hover:bg-gray-200">
                    <a class="flex items-center" href="/admin">
                        <i class="fas fa-chevron-right mr-2"></i>
                        <span>Quản lý phim</span>
                    </a>
                </li>
                <li class="pt-4 pb-4 px-4 py-2 hover:bg-gray-200">
                    <a class="flex items-center" href="/admin/user">
                        <i class="fas fa-chevron-right mr-2"></i>
                        <span>Quản lý người dùng</span>
                    </a>
                </li>
                <li class="pt-4 pb-4 px-4 py-2 hover:bg-gray-200">
                    <a class="flex items-center" href="/admin/cinemas">
                        <i class="fas fa-chevron-right mr-2"></i>
                        <span>Quản lý rạp phim</span>
                    </a>
                </li>
                <li class="pt-4 pb-4 px-4 py-2 hover:bg-gray-200">
                    <a class="flex items-center" href="/admin/showtime">
                        <i class="fas fa-chevron-right mr-2"></i>
                        <span>Quản lý lịch chiếu</span>
                    </a>
                </li>
                <li class="pt-4 pb-4 px-4 py-2 hover:bg-gray-200">
                    <a class="flex items-center" href="#">
                        <i class="fas fa-chevron-right mr-2"></i>
                        <span>quản lý số ghế </span>
                    </a>
                </li>
                <li class="pt-4 pb-4 px-4 py-2 hover:bg-gray-200">
                    <a class="flex items-center" href="#">
                        <i class="fas fa-chevron-right mr-2"></i>
                        <span>quản lý đồ ăn vặt </span>
                    </a>
                </li>
                
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
  name: "NavbarAdmin",
};
</script>