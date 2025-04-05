<template>
  <HeaderComponents />
  <div class="p-4">
    <div class="mx-40 p-4 rounded-lg" v-if="movie">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-5">
          <div class="relative">
            <img
              :alt="'Movie poster for ' + movie.title"
              class="rounded-lg w-full"
              :src="movie.poster"
            />
            <div
              class="absolute top-2 left-2 bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded"
            >
              {{ movie.rating }}
            </div>
          </div>
        </div>
        <div class="col-span-7 mt-4 md:mt-0 space-y-8">
          <h1 class="text-3xl font-bold uppercase">
            {{ movie.title }} ({{ movie.rating }})
          </h1>
          <div class="mt-2 space-y-4">
            <div class="flex items-center text-lg">
              <i class="fas fa-film mr-2"></i>
              {{ movie.genre }}
            </div>
            <div class="flex items-center text-lg">
              <i class="fas fa-clock mr-2"></i>
              {{ movie.duration }}'
            </div>
            <div class="flex items-center text-lg">
              <i class="fas fa-globe mr-2"></i>
              {{ movie.country }}
            </div>
            <div class="flex items-center text-lg">
              <i class="fas fa-flag mr-2"></i>
              {{ movie.language }}
            </div>
            <div
              class="flex items-center text-sm mt-1 bg-yellow-500 text-black px-2 py-1 rounded w-fit"
            >
              <i class="fas fa-exclamation-triangle mr-2"></i>
              {{ movie.rating_description }}
            </div>
          </div>
          <div class="mt-4">
            <h2 class="text-xl font-bold">MÔ TẢ</h2>
            <p class="mt-2">Đạo diễn: {{ movie.director }}</p>
            <p>Diễn viên: {{ movie.actors }}</p>
            <p>Khởi chiếu: {{ movie.release_date }}</p>
          </div>
          <div class="mt-4">
            <h2 class="text-xl font-bold">NỘI DUNG PHIM</h2>
            <p class="mt-2">{{ movie.description }}</p>
            <a
              class="mt-2 text-sm hover:text-yellow-400 inline-block underline"
              href="#"
            >
              Xem thêm
            </a>
          </div>
          <div class="mt-4">
            <a
              class="flex items-cente"
              :href="movie.trailer_url"
              target="_blank"
            >
              <i class="fas fa-play-circle text-3xl mr-2 text-red-500"></i>
              <span class="text-xl underline">Xem Trailer</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Lịch chiếu -->
    <div
      class="min-h-screen flex flex-col items-center justify-center"
      v-if="showtimes"
    >
      <div
          class="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-purple-900 text-white">

          <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-purple-900 text-white">
      <!-- Phần ngày chiếu -->
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-8">LỊCH CHIẾU</h1>
        <div class="flex justify-center space-x-4 mb-8 overflow-x-auto py-2">
          <button
            v-for="date in availableDates"
            :key="date"
            @click="selectDate(date)"
            class="min-w-[80px] px-4 py-2 rounded transition-colors"
            :class="{
              'bg-yellow-400 text-black': selectedDate === date,
              'border border-yellow-400 hover:bg-yellow-50': selectedDate !== date
            }"
          >
            <div>{{ formatDayMonth(date) }}</div>
            <div>{{ formatDayOfWeek(date) }}</div>
          </button>
        </div>
        
      </div>

      <!-- Danh sách rạp -->
      <div class="w-full max-w-4xl mb-12">
        <h2 class="text-2xl font-bold mb-4">DANH SÁCH RẠP</h2>
        
        <div 
          v-for="cinema in allCinemas" 
          :key="cinema.cinema_id" 
          class="bg-purple-700 p-4 mb-4 rounded"
        >
          <div class="flex justify-between items-center mb-2">
            <h3 class="text-xl font-bold text-yellow-400">{{ cinema.name }}</h3>
            <i class="fas fa-chevron-down"></i>
          </div>
          <p class="mb-2">{{ cinema.address }}</p>
          <p class="mb-2">Standard</p>
          
          <!-- Hiển thị suất chiếu hoặc thông báo -->
          <div v-if="hasShowtimesForMovie(cinema.cinema_id)" class="grid grid-cols-6 gap-2">
            <button
              v-for="showtime in getShowtimesForCinemaAndMovie(cinema.cinema_id)"
              :key="showtime.showtime_id"
              @click="selectShowtime(showtime)"
              class="border border-white px-2 py-1 rounded toggle-button"
              :class="{ 'bg-yellow-400 text-black border-yellow-400': selectedShowtime?.showtime_id === showtime.showtime_id }"
            >
              {{ formatTime(showtime.show_time) }}
            </button>
          </div>
          <div v-else class="text-center py-4 text-gray-300">
            Không có suất chiếu
          </div>
        </div>
      </div>
    </div>
  </div>




          
      </div>
    </div>

    <!-- Đặt vé -->
    <div
      class="booking-movie flex flex-col items-center p-8"
      :class="{ active: showBookingSection }"
      id="booking-section"
    >
      <!-- Phần chọn ghế và combo -->
      <!-- ... (giữ nguyên phần này nhưng thêm v-model và methods tương ứng) ... -->

      <div class="mt-8 text-center">
        <div class="font-bold">{{ movie?.title }}</div>
        <div>{{ selectedCinema?.name }}</div>
      </div>

      <div
        id="booking-bar"
        class="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center"
      >
        <div class="text-center">
          <div>Thời gian giữ vé</div>
          <div class="bg-yellow-500 text-black font-bold px-2 py-1">
            {{ countdown }}
          </div>
        </div>
        <div class="text-center">
          <div>Tạm tính</div>
          <div class="font-bold">{{ formatPrice(totalAmount) }} VND</div>
        </div>
        <button
          class="bg-yellow-500 text-black font-bold px-4 py-2"
          @click="bookTickets"
          :disabled="!canBook"
        >
          ĐẶT VÉ
        </button>
      </div>
  </div>
  <div v-show="showTicketSelection && selectedShowtime"
  id="ticket-section"  class="booking-movie flex flex-col items-center p-8"  style="display: none;">
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
  </div>
  <FooterComponents />
</template>

<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import HeaderComponents from "./HeaderComponent.vue";
import FooterComponents from "./FooterComponents.vue";

export default {
  name: "ShowtimesComponent",
  components: {
    HeaderComponents,
    FooterComponents,
  },
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      movieDetails: null,
      cinemas: [],
      showtimes: [],
      selectedDate: null,
      selectedShowtime: null,
      isLoading: false,
      movieId: null,
      showTicketSelection: false,
    };
  },
  computed: {
    allCinemas() {
      return this.cinemas;
    },
    availableDates() {
      if (!Array.isArray(this.showtimes)) return [];
      // Chỉ lấy ngày của phim hiện tại (theo movieId)
      const dates = [...new Set(this.showtimes
        .filter(st => st?.show_date && st.movie_id == this.movieId)
        .map(st => st.show_date)
      )];
      return dates.sort((a, b) => new Date(a) - new Date(b));
    }
  },
  methods: {
    async fetchMovieDetails(movieId) {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/movies/${movieId}`);
        this.movieDetails = response.data;
      } catch (error) {
        console.error('Error fetching movie details:', error);
        toast.error('Lỗi khi tải thông tin phim');
      }
    },
    
    // Kiểm tra rạp có suất chiếu cho phim này không
    hasShowtimesForMovie(cinemaId) {
      if (!this.selectedDate || !this.movieId) return false;
      
      return this.showtimes.some(
        st => st.cinema_id === cinemaId && 
              st.show_date === this.selectedDate &&
              st.movie_id == this.movieId
      );
    },
    
    // Lấy suất chiếu cho rạp và phim hiện tại
    getShowtimesForCinemaAndMovie(cinemaId) {
      if (!this.selectedDate || !this.movieId) return [];
      
      const filtered = this.showtimes.filter(
        st => st.cinema_id === cinemaId && 
              st.show_date === this.selectedDate &&
              st.movie_id == this.movieId
      );
      
      // Loại bỏ trùng lặp thời gian
      const unique = [];
      const seen = new Set();
      
      for (const st of filtered) {
        if (!seen.has(st.show_time)) {
          seen.add(st.show_time);
          unique.push(st);
        }
      }
      
      return unique;
    },
    
    async fetchCinemas() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/cinemas`);
        this.cinemas = response.data || [];
      } catch (error) {
        console.error('Error fetching cinemas:', error);
        toast.error('Lỗi khi tải danh sách rạp');
      }
    },
    
    async fetchShowtimes() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/showtimes`);
        
        this.showtimes = Array.isArray(response.data) ? response.data : 
                       response.data?.showtimes ? response.data.showtimes : 
                       response.data?.data ? response.data.data : [];
        
        if (this.availableDates.length > 0) {
          this.selectedDate = this.availableDates[0];
        }
      } catch (error) {
        console.error('Error fetching showtimes:', error);
        toast.error('Lỗi khi tải lịch chiếu');
      }
    },
    
    formatDayMonth(dateString) {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      return `${day}/${month}`;
    },
    
    formatDayOfWeek(dateString) {
      const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
      const date = new Date(dateString);
      return days[date.getDay()];
    },
    
    formatTime(timeString) {
      return timeString.substring(0, 5);
    },
    
    selectDate(date) {
      this.selectedDate = date;
      this.selectedShowtime = null;
    },
    
    selectShowtime(showtime) {
    this.selectedShowtime = showtime;
    this.showTicketSelection = true;
    
    // Tự động cuộn xuống phần chọn vé
    this.$nextTick(() => {
      const element = document.getElementById('ticket-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  },
    
    viewTrailer(movie) {
      if (movie.trailer_url) {
        window.open(movie.trailer_url, '_blank');
      } else {
        toast.error('Không có trailer cho phim này!');
      }
    }
  },
  async created() {
    this.movieId = this.$route.params.id;
    if (this.movieId) {
      await this.fetchMovieDetails(this.movieId);
      await this.fetchCinemas();
      await this.fetchShowtimes();
    }
  }
};
</script>





<style scoped>
@import "../assets/css/movie-detail.css";
</style>