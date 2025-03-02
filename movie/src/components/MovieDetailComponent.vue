<template>
    <HeaderComponents />
    <div class="p-4">
        <div class="max-w-5xl mx-auto bg-[#1c2541] p-4 rounded-lg">
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2">
                    <div class="relative">
                        <img alt="Movie poster showing a group of people with various expressions" class="rounded-lg"
                            height="600"
                            src="https://storage.googleapis.com/a1aa/image/Q39JTVZk03bRSdbWqcBMO4UPf2PrO0HMksfg9CYrwW4.jpg"
                            width="400" />
                        <div class="absolute top-2 left-2 bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded">
                            T18
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <h1 class="text-3xl font-bold">
                        NHÀ GIA TIẾN (T18)
                    </h1>
                    <div class="mt-2">
                        <div class="flex items-center text-sm">
                            <i class="fas fa-film mr-2">
                            </i>
                            Hải, Gia đình
                        </div>
                        <div class="flex items-center text-sm mt-1">
                            <i class="fas fa-clock mr-2">
                            </i>
                            117'
                        </div>
                        <div class="flex items-center text-sm mt-1">
                            <i class="fas fa-globe mr-2">
                            </i>
                            Việt Nam
                        </div>
                        <div class="flex items-center text-sm mt-1">
                            <i class="fas fa-flag mr-2">
                            </i>
                            VN
                        </div>
                        <div class="flex items-center text-sm mt-1 bg-yellow-500 text-black px-2 py-1 rounded">
                            <i class="fas fa-exclamation-triangle mr-2">
                            </i>
                            T18: Phim dành cho khán giả từ đủ 18 tuổi trở lên (18+)
                        </div>
                    </div>
                    <div class="mt-4">
                        <h2 class="text-xl font-bold">
                            MÔ TẢ
                        </h2>
                        <p class="mt-2">
                            Đạo diễn: Huỳnh Lập
                        </p>
                        <p>
                            Diễn viên: Huỳnh Lập, Phương Mỹ Chi, NSƯT Hạnh Thúy, NSƯT Huỳnh Đông, Puka, Đào Anh Tuấn,
                            Trung Dân, Kiều Linh, Lê Nam, Chí Tâm, Thanh Thức, Trác Thúy Miêu, Mai Thế Hiệp, NS Mạnh
                            Dung, NSƯT Thanh Dậu, NS Thanh Hiền, Nguyễn Anh Tú,...
                        </p>
                        <p>
                            Khởi chiếu: Thứ Sáu, 21/02/2025
                        </p>
                    </div>
                    <div class="mt-4">
                        <h2 class="text-xl font-bold">
                            NỘI DUNG PHIM
                        </h2>
                        <p class="mt-2">
                            Nhà Gia Tiến xoay quanh câu chuyện đa góc nhìn về các thế hệ khác nhau trong một gia đình,
                            có hai nhân vật chính là Gia Minh (Huỳnh Lập) và Mỹ Tiên (Phương Mỹ Chi). Trở về căn nhà gia
                            tiên để quay các video “triệu view” trên mạng xã hội, Mỹ Tiên - một nhà sáng tạo nội dung
                            thuộc thế hệ Z vốn không tin vào chuyện tâm linh, hoàn toàn mất kết nối với gia đình, bất
                            ngờ gặp lại thấy Gia Minh - người anh trai đã mất từ lâu. Để hồn ma của Gia Minh có thể siêu
                            thoát và không tiếp tục làm phiền...
                        </p>
                        <a class="text-blue-400 mt-2 inline-block" href="#">
                            Xem thêm
                        </a>
                    </div>
                    <div class="mt-4">
                        <a class="flex items-center text-red-500" href="#">
                            <i class="fas fa-play-circle text-2xl mr-2">
                            </i>
                            Xem Trailer
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-col items-center justify-center">
        <div
            class="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-purple-900 text-white">
            <div class="text-center">
                <h1 class="text-4xl font-bold mb-8">LỊCH CHIẾU</h1>
                <div class="flex justify-center space-x-4 mb-8">
                    <div class="bg-yellow-400 text-black px-4 py-2 rounded">02/03<br>Chủ Nhật</div>
                    <div class="border border-yellow-400 px-4 py-2 rounded">03/03<br>Thứ Hai</div>
                    <div class="border border-yellow-400 px-4 py-2 rounded">04/03<br>Thứ Ba</div>
                    <div class="border border-yellow-400 px-4 py-2 rounded">05/03<br>Thứ Tư</div>
                </div>
                <button class="border border-yellow-400 px-4 py-2 rounded mb-8">HỒ CHÍ MINH</button>
            </div>
            <div class="w-full max-w-4xl">
                <h2 class="text-2xl font-bold mb-4">DANH SÁCH RẠP</h2>
                <div class="bg-purple-700 p-4 mb-4 rounded">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="text-xl font-bold text-yellow-400">Cinestar Quốc Thanh (TP.HCM)</h3>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <p class="mb-2">271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành Phố Hồ Chí Minh</p>
                    <p class="mb-2">Standard</p>
                    <div class="grid grid-cols-6 gap-2">
                        <div class="border border-white px-2 py-1 rounded toggle-button">09:15</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">09:45</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">10:40</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">11:40</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">12:10</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">13:00</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">14:00</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">14:30</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">15:20</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">16:20</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">16:50</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">17:40</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">18:40</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">19:10</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">20:00</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">20:40</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">21:00</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">21:30</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">22:20</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">23:00</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">23:20</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">23:50</div>
                    </div>
                </div>
                <div class="bg-purple-700 p-4 mb-4 rounded">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="text-xl font-bold text-yellow-400">Cinestar Hai Bà Trưng (TP.HCM)</h3>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <p class="mb-2">135 Hai Bà Trưng, Phường Bến Nghé, Quận 1, Thành Phố Hồ Chí Minh</p>
                    <p class="mb-2">Standard</p>
                    <div class="grid grid-cols-6 gap-2">
                        <div class="border border-white px-2 py-1 rounded toggle-button">08:15</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">09:00</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">10:30</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">11:15</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">12:15</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">12:45</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">13:30</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">14:30</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">15:00</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">15:45</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">16:10</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">16:45</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">17:15</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">18:00</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">18:30</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">19:00</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">19:30</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">20:15</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">20:45</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">21:15</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">22:30</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">23:00</div>
                        <div class="border border-white px-2 py-1 rounded toggle-button">23:30</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="booking-movie flex flex-col items-center p-8" id="booking-section" style="display: none;">
        <h1 class="text-2xl font-bold mb-4">CHỌN LOẠI VÉ</h1>
        <div class="flex justify-center space-x-4 mb-8">
            <div class="bg-gray-800 p-4 rounded-lg text-center">
                <h2 class="text-lg font-semibold">NGƯỜI LỚN</h2>
                <p>ĐƠN</p>
                <p>70,000 VND</p>
                <div class="flex justify-center items-center mt-2">
                    <button class="bg-gray-600 text-white px-2 py-1 rounded">-</button>
                    <span class="mx-2">0</span>
                    <button class="bg-gray-600 text-white px-2 py-1 rounded">+</button>
                </div>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg text-center">
                <h2 class="text-lg font-semibold">HSSV, NGƯỜI CAO TUỔI</h2>
                <p>ĐƠN</p>
                <p>45,000 VND</p>
                <div class="flex justify-center items-center mt-2">
                    <button class="bg-gray-600 text-white px-2 py-1 rounded">-</button>
                    <span class="mx-2">0</span>
                    <button class="bg-gray-600 text-white px-2 py-1 rounded">+</button>
                </div>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg text-center">
                <h2 class="text-lg font-semibold">NGƯỜI LỚN</h2>
                <p>ĐÔI</p>
                <p>145,000 VND</p>
                <div class="flex justify-center items-center mt-2">
                    <button class="bg-gray-600 text-white px-2 py-1 rounded">-</button>
                    <span class="mx-2">0</span>
                    <button class="bg-gray-600 text-white px-2 py-1 rounded">+</button>
                </div>
            </div>
        </div>
        <div class="container mx-auto text-center">
            <div class="screen"></div>
            <p class="text-lg mb-4">Màn hình</p>
            <div class="flex justify-center flex-wrap">
                <!-- Row A -->
                <div class="flex items-center mb-2">
                    <div class="inline-block w-5 text-center m-1">A</div>
                    <div class="seat">A01</div>
                    <div class="seat">A02</div>
                    <div class="seat">A03</div>
                    <div class="seat">A04</div>
                    <div class="seat">A05</div>
                    <div class="seat">A06</div>
                    <div class="seat">A07</div>
                    <div class="seat">A08</div>
                    <div class="seat">A09</div>
                    <div class="seat">A10</div>
                    <div class="seat">A11</div>
                    <div class="seat">A12</div>
                    <div class="seat">A13</div>
                    <div class="seat">A14</div>
                    <div class="seat">A15</div>
                    <div class="seat">A16</div>
                    <div class="seat">A17</div>
                    <div class="seat">A18</div>
                    <div class="seat">A19</div>
                    <div class="seat">A20</div>
                    <div class="seat">A21</div>
                </div>
                <!-- Row B -->
                <div class="flex items-center mb-2">
                    <div class="inline-block w-5 text-center m-1">B</div>
                    <div class="seat">B01</div>
                    <div class="seat">B02</div>
                    <div class="seat">B03</div>
                    <div class="seat">B04</div>
                    <div class="seat">B05</div>
                    <div class="seat">B06</div>
                    <div class="seat">B07</div>
                    <div class="seat">B08</div>
                    <div class="seat">B09</div>
                    <div class="seat">B10</div>
                    <div class="seat">B11</div>
                    <div class="seat">B12</div>
                    <div class="seat">B13</div>
                    <div class="seat">B14</div>
                    <div class="seat">B15</div>
                    <div class="seat">B16</div>
                    <div class="seat">B17</div>
                    <div class="seat">B18</div>
                    <div class="seat">B19</div>
                    <div class="seat">B20</div>
                    <div class="seat">B21</div>
                </div>
                <!-- Row C -->
                <div class="flex items-center mb-2">
                    <div class="inline-block w-5 text-center m-1">C</div>
                    <div class="seat">C01</div>
                    <div class="seat">C02</div>
                    <div class="seat">C03</div>
                    <div class="seat">C04</div>
                    <div class="seat">C05</div>
                    <div class="seat">C06</div>
                    <div class="seat">C07</div>
                    <div class="seat">C08</div>
                    <div class="seat">C09</div>
                    <div class="seat">C10</div>
                    <div class="seat">C11</div>
                    <div class="seat">C12</div>
                    <div class="seat">C13</div>
                    <div class="seat">C14</div>
                    <div class="seat">C15</div>
                    <div class="seat">C16</div>
                    <div class="seat">C17</div>
                    <div class="seat">C18</div>
                    <div class="seat">C19</div>
                    <div class="seat">C20</div>
                    <div class="seat">C21</div>
                    <div class="seat">C22</div>
                </div>
                <!-- Row D -->
                <div class="flex items-center mb-2">
                    <div class="inline-block w-5 text-center m-1">D</div>
                    <div class="seat">D01</div>
                    <div class="seat">D02</div>
                    <div class="seat">D03</div>
                    <div class="seat">D04</div>
                    <div class="seat">D05</div>
                    <div class="seat">D06</div>
                    <div class="seat">D07</div>
                    <div class="seat">D08</div>
                    <div class="seat">D09</div>
                    <div class="seat">D10</div>
                    <div class="seat">D11</div>
                    <div class="seat">D12</div>
                    <div class="seat">D13</div>
                    <div class="seat">D14</div>
                    <div class="seat">D15</div>
                    <div class="seat">D16</div>
                    <div class="seat">D17</div>
                    <div class="seat">D18</div>
                    <div class="seat">D19</div>
                    <div class="seat">D20</div>
                    <div class="seat">D21</div>
                    <div class="seat">D22</div>
                </div>
                <!-- Row E -->
                <div class="flex items-center mb-2">
                    <div class="inline-block w-5 text-center m-1">E</div>
                    <div class="seat">E01</div>
                    <div class="seat">E02</div>
                    <div class="seat">E03</div>
                    <div class="seat">E04</div>
                    <div class="seat">E05</div>
                    <div class="seat">E06</div>
                    <div class="seat">E07</div>
                    <div class="seat">E08</div>
                    <div class="seat">E09</div>
                    <div class="seat">E10</div>
                    <div class="seat">E11</div>
                    <div class="seat">E12</div>
                    <div class="seat">E13</div>
                    <div class="seat">E14</div>
                    <div class="seat">E15</div>
                    <div class="seat">E16</div>
                    <div class="seat">E17</div>
                    <div class="seat">E18</div>
                    <div class="seat">E19</div>
                    <div class="seat">E20</div>
                    <div class="seat">E21</div>
                    <div class="seat">E22</div>
                </div>
                <!-- Row F -->
                <div class="flex items-center mb-2">
                    <div class="inline-block w-5 text-center m-1">F</div>
                    <div class="seat">F01</div>
                    <div class="seat">F02</div>
                    <div class="seat">F03</div>
                    <div class="seat">F04</div>
                    <div class="seat">F05</div>
                    <div class="seat">F06</div>
                    <div class="seat">F07</div>
                    <div class="seat">F08</div>
                    <div class="seat">F09</div>
                    <div class="seat">F10</div>
                    <div class="seat">F11</div>
                    <div class="seat">F12</div>
                    <div class="seat">F13</div>
                    <div class="seat">F14</div>
                    <div class="seat">F15</div>
                    <div class="seat">F16</div>
                    <div class="seat">F17</div>
                    <div class="seat">F18</div>
                    <div class="seat">F19</div>
                    <div class="seat">F20</div>
                    <div class="seat">F21</div>
                    <div class="seat">F22</div>
                </div>
                <!-- Row G -->
                <div class="flex items-center mb-2">
                    <div class="inline-block w-5 text-center m-1">G</div>
                    <div class="seat">G01</div>
                    <div class="seat">G02</div>
                    <div class="seat">G03</div>
                    <div class="seat">G04</div>
                    <div class="seat">G05</div>
                    <div class="seat">G06</div>
                    <div class="seat">G07</div>
                    <div class="seat">G08</div>
                    <div class="seat">G09</div>
                    <div class="seat">G10</div>
                    <div class="seat">G11</div>
                    <div class="seat">G12</div>
                    <div class="seat">G13</div>
                    <div class="seat">G14</div>
                    <div class="seat">G15</div>
                    <div class="seat">G16</div>
                    <div class="seat">G17</div>
                    <div class="seat">G18</div>
                    <div class="seat">G19</div>
                    <div class="seat">G20</div>
                    <div class="seat">G21</div>
                    <div class="seat">G22</div>
                </div>
                <!-- Row H -->
                <div class="flex items-center mb-2">
                    <div class="inline-block w-5 text-center m-1">H</div>
                    <div class="seat">H01</div>
                    <div class="seat">H02</div>
                    <div class="seat">H03</div>
                    <div class="seat">H04</div>
                    <div class="seat">H05</div>
                    <div class="seat">H06</div>
                    <div class="seat">H07</div>
                    <div class="seat">H08</div>
                    <div class="seat">H09</div>
                    <div class="seat">H10</div>
                    <div class="seat">H11</div>
                    <div class="seat">H12</div>
                    <div class="seat">H13</div>
                    <div class="seat">H14</div>
                    <div class="seat">H15</div>
                    <div class="seat">H16</div>
                    <div class="seat">H17</div>
                    <div class="seat">H18</div>
                    <div class="seat">H19</div>
                    <div class="seat">H20</div>
                    <div class="seat">H21</div>
                    <div class="seat">H22</div>
                </div>
                <!-- Row I -->
                <div class="flex items-center mb-2">
                    <div class="inline-block w-5 text-center m-1">I</div>
                    <div class="seat">I01</div>
                    <div class="seat">I02</div>
                    <div class="seat">I03</div>
                    <div class="seat">I04</div>
                    <div class="seat">I05</div>
                    <div class="seat">I06</div>
                    <div class="seat">I07</div>
                    <div class="seat">I08</div>
                    <div class="seat">I09</div>
                    <div class="seat">I10</div>
                    <div class="seat">I11</div>
                    <div class="seat">I12</div>
                    <div class="seat">I13</div>
                    <div class="seat">I14</div>
                    <div class="seat">I15</div>
                    <div class="seat">I16</div>
                    <div class="seat">I17</div>
                    <div class="seat">I18</div>
                    <div class="seat">I19</div>
                    <div class="seat">I20</div>
                    <div class="seat">I21</div>
                    <div class="seat">I22</div>
                    <div class="seat">I23</div>
                    <div class="seat">I24</div>
                </div>
                <!-- Row J -->
                <div class="flex items-center mb-2">
                    <div class="inline-block w-5 text-center m-1">J</div>
                    <div class="seat">J01</div>
                    <div class="seat">J02</div>
                    <div class="seat">J03</div>
                    <div class="seat">J04</div>
                    <div class="seat">J05</div>
                    <div class="seat">J06</div>
                    <div class="seat">J07</div>
                    <div class="seat">J08</div>
                    <div class="seat">J09</div>
                    <div class="seat">J10</div>
                    <div class="seat">J11</div>
                    <div class="seat">J12</div>
                    <div class="seat">J13</div>
                    <div class="seat">J14</div>
                    <div class="seat">J15</div>
                    <div class="seat">J16</div>
                    <div class="seat">J17</div>
                    <div class="seat">J18</div>
                    <div class="seat">J19</div>
                    <div class="seat">J20</div>
                    <div class="seat">J21</div>
                    <div class="seat">J22</div>
                    <div class="seat">J23</div>
                </div>
                <!-- Row K -->
                <div class="flex items-center mb-2">
                    <div class="inline-block w-5 text-center m-1">K</div>
                    <div class="seat">K01</div>
                    <div class="seat">K02</div>
                    <div class="seat">K03</div>
                    <div class="seat">K04</div>
                    <div class="seat">K05</div>
                    <div class="seat">K06</div>
                    <div class="seat">K07</div>
                    <div class="seat">K08</div>
                    <div class="seat">K09</div>
                    <div class="seat">K10</div>
                    <div class="seat">K11</div>
                    <div class="seat">K12</div>
                    <div class="seat">K13</div>
                    <div class="seat">K14</div>
                    <div class="seat">K15</div>
                    <div class="seat">K16</div>
                    <div class="seat">K17</div>
                    <div class="seat">K18</div>
                    <div class="seat">K19</div>
                    <div class="seat">K20</div>
                    <div class="seat">K21</div>
                    <div class="seat">K22</div>
                    <div class="seat">K23</div>
                </div>
                <!-- Row L -->
                <div class="flex items-center mb-2">
                    <div class="inline-block w-5 text-center m-1">L</div>
                    <div class="seat">L01</div>
                    <div class="seat">L02</div>
                    <div class="seat">L03</div>
                    <div class="seat">L04</div>
                    <div class="seat">L05</div>
                    <div class="seat">L06</div>
                    <div class="seat">L07</div>
                    <div class="seat">L08</div>
                    <div class="seat">L09</div>
                    <div class="seat">L10</div>
                    <div class="seat">L11</div>
                    <div class="seat">L12</div>
                    <div class="seat">L13</div>
                    <div class="seat">L14</div>
                    <div class="seat">L15</div>
                    <div class="seat">L16</div>
                </div>
                <!-- Row M -->
                <div class="flex items-center mb-2">
                    <div class="inline-block w-5 text-center m-1">M</div>
                    <div class="seat">M01</div>
                    <div class="seat">M02</div>
                    <div class="seat">M03</div>
                    <div class="seat">M04</div>
                    <div class="seat">M05</div>
                    <div class="seat">M06</div>
                    <div class="seat">M07</div>
                    <div class="seat">M08</div>
                    <div class="seat">M09</div>
                    <div class="seat">M10</div>
                    <div class="seat">M11</div>
                    <div class="seat">M12</div>
                    <div class="seat">M13</div>
                    <div class="seat">M14</div>
                    <div class="seat">M15</div>
                    <div class="seat">M16</div>
                </div>
                <!-- Row N -->
                <div class="flex items-center mb-2">
                    <div class="inline-block w-5 text-center m-1">N</div>
                    <div class="seat">N01</div>
                    <div class="seat">N02</div>
                    <div class="seat">N03</div>
                    <div class="seat">N04</div>
                    <div class="seat">N05</div>
                    <div class="seat">N06</div>
                    <div class="seat">N07</div>
                    <div class="seat">N08</div>
                </div>
            </div>
            <div class="legend">
                <div class="normal">
                    <span></span> Ghế Thường
                </div>
                <div class="double">
                    <span></span> Ghế Đôi (2 Người)
                </div>
                <div class="selected">
                    <span></span> Ghế chọn
                </div>
                <div class="booked">
                    <span></span> Ghế đã đặt
                </div>
            </div>
        </div>
        <div class="p-4">
            <div class="text-center text-2xl font-bold mb-8">
                CHỌN BẮP NƯỚC
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Combo Gấu -->
                <div class="text-center">
                    <img alt="Combo Gấu image" class="mx-auto mb-4" height="100"
                        src="https://storage.googleapis.com/a1aa/image/PRMR47uikrVUdk08ocND3toqRDCSM332Dfphqksux5c.jpg"
                        width="100" />
                    <div class="font-bold">
                        COMBO GẤU
                    </div>
                    <div>
                        1 Cake 32oz + 1 Bắp 2 Ngăn 64oz Phô Mai + Caramel
                    </div>
                    <div class="font-bold">
                        119,000 VND
                    </div>
                    <div class="flex justify-center items-center mt-2">
                        <button class="bg-gray-700 text-white px-2 py-1">
                            -
                        </button>
                        <input class="w-12 text-center mx-2" type="text" value="0" />
                        <button class="bg-gray-700 text-white px-2 py-1">
                            +
                        </button>
                    </div>
                </div>
                <!-- Combo Có Gấu -->
                <div class="text-center">
                    <img alt="Combo Có Gấu image" class="mx-auto mb-4" height="100"
                        src="https://storage.googleapis.com/a1aa/image/B0UK9xsMRdm92h9SRcT-gaPnf6hhGMBZ8ioxT_jZGSU.jpg"
                        width="100" />
                    <div class="font-bold">
                        COMBO CÓ GẤU
                    </div>
                    <div>
                        2 Cake 32oz + 1 Bắp 2 Ngăn 64oz Phô Mai + Caramel
                    </div>
                    <div class="font-bold">
                        129,000 VND
                    </div>
                    <div class="flex justify-center items-center mt-2">
                        <button class="bg-gray-700 text-white px-2 py-1">
                            -
                        </button>
                        <input class="w-12 text-center mx-2" type="text" value="0" />
                        <button class="bg-gray-700 text-white px-2 py-1">
                            +
                        </button>
                    </div>
                </div>
                <!-- Combo Nhà Gấu -->
                <div class="text-center">
                    <img alt="Combo Nhà Gấu image" class="mx-auto mb-4" height="100"
                        src="https://storage.googleapis.com/a1aa/image/hSGeusZBWcah6yzBQ_wLoVzhumO4JuaEnuVy7vIHgMs.jpg"
                        width="100" />
                    <div class="font-bold">
                        COMBO NHÀ GẤU
                    </div>
                    <div>
                        4 Cake 32oz + 1 Bắp 2 Ngăn 64oz Phô Mai + Caramel
                    </div>
                    <div class="font-bold">
                        259,000 VND
                    </div>
                    <div class="flex justify-center items-center mt-2">
                        <button class="bg-gray-700 text-white px-2 py-1">
                            -
                        </button>
                        <input class="w-12 text-center mx-2" type="text" value="0" />
                        <button class="bg-gray-700 text-white px-2 py-1">
                            +
                        </button>
                    </div>
                </div>
                <!-- Sprite 32oz -->
                <div class="text-center">
                    <img alt="Sprite 32oz image" class="mx-auto mb-4" height="100"
                        src="https://storage.googleapis.com/a1aa/image/icOAH431Dl6pXPBPocj0MuX9LQp6nfH0MwVy-ZOPRU0.jpg"
                        width="100" />
                    <div class="font-bold">
                        SPRITE 32OZ
                    </div>
                    <div>
                        37,000 VND
                    </div>
                    <div class="flex justify-center items-center mt-2">
                        <button class="bg-gray-700 text-white px-2 py-1">
                            -
                        </button>
                        <input class="w-12 text-center mx-2" type="text" value="0" />
                        <button class="bg-gray-700 text-white px-2 py-1">
                            +
                        </button>
                    </div>
                </div>
                <!-- Coke Zero 32oz -->
                <div class="text-center">
                    <img alt="Coke Zero 32oz image" class="mx-auto mb-4" height="100"
                        src="https://storage.googleapis.com/a1aa/image/QeWbTAIBUTJo5l2ZKmLmsI8KOxby6NLQNpG150qKKhQ.jpg"
                        width="100" />
                    <div class="font-bold">
                        COKE ZERO 32OZ
                    </div>
                    <div>
                        37,000 VND
                    </div>
                    <div class="flex justify-center items-center mt-2">
                        <button class="bg-gray-700 text-white px-2 py-1">
                            -
                        </button>
                        <input class="w-12 text-center mx-2" type="text" value="0" />
                        <button class="bg-gray-700 text-white px-2 py-1">
                            +
                        </button>
                    </div>
                </div>
                <!-- Coke 32oz -->
                <div class="text-center">
                    <img alt="Coke 32oz image" class="mx-auto mb-4" height="100"
                        src="https://storage.googleapis.com/a1aa/image/5040H4g5KKnKE7Y6WLYG91FjA4rHjO3zqN2FFJRt8D4.jpg"
                        width="100" />
                    <div class="font-bold">
                        COKE 32OZ
                    </div>
                    <div>
                        37,000 VND
                    </div>
                    <div class="flex justify-center items-center mt-2">
                        <button class="bg-gray-700 text-white px-2 py-1">
                            -
                        </button>
                        <input class="w-12 text-center mx-2" type="text" value="0" />
                        <button class="bg-gray-700 text-white px-2 py-1">
                            +
                        </button>
                    </div>
                </div>
                <!-- Fanta 32oz -->
                <div class="text-center">
                    <img alt="Fanta 32oz image" class="mx-auto mb-4" height="100"
                        src="https://storage.googleapis.com/a1aa/image/GObh3h8lUxbntdLbibff95mjFnu_lulYq5RFSSSC2pA.jpg"
                        width="100" />
                    <div class="font-bold">
                        FANTA 32OZ
                    </div>
                    <div>
                        37,000 VND
                    </div>
                    <div class="flex justify-center items-center mt-2">
                        <button class="bg-gray-700 text-white px-2 py-1">
                            -
                        </button>
                        <input class="w-12 text-center mx-2" type="text" value="0" />
                        <button class="bg-gray-700 text-white px-2 py-1">
                            +
                        </button>
                    </div>
                </div>
                <!-- Nước Cam Teppy -->
                <div class="text-center">
                    <img alt="Nước Cam Teppy image" class="mx-auto mb-4" height="100"
                        src="https://storage.googleapis.com/a1aa/image/a2VU3hsiiG1ljkL_h0ArN4SPW_-xKqi6Clx5b26Onjo.jpg"
                        width="100" />
                    <div class="font-bold">
                        NƯỚC CAM TEPPY 327ML
                    </div>
                    <div>
                        28,000 VND
                    </div>
                    <div class="flex justify-center items-center mt-2">
                        <button class="bg-gray-700 text-white px-2 py-1">
                            -
                        </button>
                        <input class="w-12 text-center mx-2" type="text" value="0" />
                        <button class="bg-gray-700 text-white px-2 py-1">
                            +
                        </button>
                    </div>
                </div>
                <!-- Nước Suối Dasani -->
                <div class="text-center">
                    <img alt="Nước Suối Dasani image" class="mx-auto mb-4" height="100"
                        src="https://storage.googleapis.com/a1aa/image/rrqsansuUBChMnvToDl11eVJKfrbFiwZLVD4W8NvK2k.jpg"
                        width="100" />
                    <div class="font-bold">
                        NƯỚC SUỐI DASANI 500/150ML
                    </div>
                    <div>
                        20,000 VND
                    </div>
                    <div class="flex justify-center items-center mt-2">
                        <button class="bg-gray-700 text-white px-2 py-1">
                            -
                        </button>
                        <input class="w-12 text-center mx-2" type="text" value="0" />
                        <button class="bg-gray-700 text-white px-2 py-1">
                            +
                        </button>
                    </div>
                </div>
                <!-- Nước Trái Cây Nutriboost -->
                <div class="text-center">
                    <img alt="Nước Trái Cây Nutriboost image" class="mx-auto mb-4" height="100"
                        src="https://storage.googleapis.com/a1aa/image/01OINE0wKI0pTMnet_AfBG14oh5q-nX7X6NC-AFeb8g.jpg"
                        width="100" />
                    <div class="font-bold">
                        NƯỚC TRÁI CÂY NUTRIBOOST 297ML
                    </div>
                    <div>
                        28,000 VND
                    </div>
                    <div class="flex justify-center items-center mt-2">
                        <button class="bg-gray-700 text-white px-2 py-1">
                            -
                        </button>
                        <input class="w-12 text-center mx-2" type="text" value="0" />
                        <button class="bg-gray-700 text-white px-2 py-1">
                            +
                        </button>
                    </div>
                </div>
                <!-- Snack Thái -->
                <div class="text-center">
                    <img alt="Snack Thái image" class="mx-auto mb-4" height="100"
                        src="https://storage.googleapis.com/a1aa/image/TnihrWuW3ZHikaxG7OFl4AIxBuMuUudJlh0r-dVQhXk.jpg"
                        width="100" />
                    <div class="font-bold">
                        SNACK THÁI
                    </div>
                    <div>
                        25,000 VND
                    </div>
                    <div class="flex justify-center items-center mt-2">
                        <button class="bg-gray-700 text-white px-2 py-1">
                            -
                        </button>
                        <input class="w-12 text-center mx-2" type="text" value="0" />
                        <button class="bg-gray-700 text-white px-2 py-1">
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div class="mt-8 text-center">
                <div class="font-bold">
                    NHÀ GIÁ TIẾN (T18)
                </div>
                <div>
                    Cinestar Quốc Thanh (TPHCM)
                </div>
            </div>
            <div id="booking-bar"
                class="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
                <div class="text-center">
                    <div>
                        Thời gian giữ vé
                    </div>
                    <div class="bg-yellow-500 text-black font-bold px-2 py-1">
                        05:00
                    </div>
                </div>
                <div class="text-center">
                    <div>
                        Tạm tính
                    </div>
                    <div class="font-bold">
                        0 VND
                    </div>
                </div>
                <button class="bg-yellow-500 text-black font-bold px-4 py-2">
                    ĐẶT VÉ
                </button>
            </div>
        </div>
    </div>
    <FooterComponents />
</template>

<script>
import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';


import '../assets/js/movie_detail.js';
export default {
    name: 'MovieDetailComponent',
    components: {
        HeaderComponents, FooterComponents
    }
}
</script>
<style scoped>
@import "../assets/css/movie-detail.css";
</style>
