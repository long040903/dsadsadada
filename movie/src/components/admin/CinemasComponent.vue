<template>

    <div class="bg-gray-100 text-black">
      <div class="flex">
        <NavbarComponent />
        <div class="flex-1 p-6">
          <HeaderComponent />
          <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-bold">Quản lý rạp</h1>
            <div class="flex items-center">
              <input class="border rounded-l px-4 py-2"
                     placeholder="Tìm kiếm theo Tên chính sách, Mã chính sách" type="text" />
              <button class="bg-blue-500 text-white px-4 py-2 rounded-r">
                <i class="fas fa-search"></i>
              </button>
              <button class="bg-yellow-500 text-white px-4 py-2 ml-2 rounded">
                <i class="fas fa-sync-alt"></i>
              </button>
            </div>
          </div>
          <button class="bg-blue-500 text-white px-4 py-2 mb-4 rounded" @click="openModal('add')">
            + Thêm mới
          </button>
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <table class="min-w-full bg-white">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b">ID</th>
                  <th class="py-2 px-4 border-b">Name</th>
                  <th class="py-2 px-4 border-b">Poster</th>
                  <th class="py-2 px-4 border-b">Tỉnh/Thành phố</th>
                  <th class="py-2 px-4 border-b">Quận/Huyện</th>
                  <th class="py-2 px-4 border-b">Xã/Phường</th>
                  <th class="py-2 px-4 border-b">Địa chỉ</th>
                  <th class="py-2 px-4 border-b">Phone</th>
                  <th class="py-2 px-4 border-b">Capacity</th>
                  <th class="py-2 px-4 border-b">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cinema, index) in cinemas" :key="cinema.cinema_id">
                  <td class="py-2 px-4 border-b text-center">{{ cinema.cinema_id }}</td>
                  <td class="py-2 px-4 border-b text-center">{{ cinema.name }}</td>
                  <td class="py-2 px-4 border-b">
                    {{ getPosterName(cinema.poster_id) }}
                </td>
                  <td class="py-2 px-4 border-b text-center">{{ cinema.province_name }}</td>
                  <td class="py-2 px-4 border-b text-center">{{ cinema.district_name }}</td>
                  <td class="py-2 px-4 border-b text-center">{{ cinema.ward_name }}</td>
                  <td class="py-2 px-4 border-b text-center">{{ cinema.address }}</td>
                  
                  <td class="py-2 px-4 border-b text-center">{{ cinema.phone }}</td>
                  <td class="py-2 px-4 border-b text-center">{{ cinema.capacity }}</td>
                  <td class="py-2 px-4 border-b text-center">
                    <button class="text-blue-500" @click="openModal('edit', cinema)">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button class="text-red-500 ml-2" @click="openModal('delete', cinema)">
                      <i class="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
              <div v-if="errorMessage"
                   class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                {{ errorMessage }}
              </div>
            </table>
          </div>
          <div v-if="showModal && modalType !== 'delete'"
               class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div
                class="relative bg-white p-6 rounded shadow-lg w-full max-w-lg mx-auto overflow-y-auto h-auto max-h-full">
              <button @click="closeModal" class="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
  
              <h2 class="text-xl font-bold mb-4">{{ modalType === 'add' ? 'Thêm mới' : 'Chỉnh sửa' }}</h2>
              <form @submit.prevent="handleSubmit">
                
  
                <label class="block mb-2">Name:</label>
                <input type="text" v-model="form.name" class="border px-4 py-2 w-full mb-4">
  
                
                <v-select
                    v-model="form.posterId"
                    :options="validPosters"
                    :reduce="poster => poster.poster_id"
                    label="name"
                    placeholder="Select a poster"
                    class="mb-4"
                    
                ></v-select>
               
  
                <label class="block mb-2">Tỉnh/Thành phố:</label>
                <v-select
                    v-model="form.provinceName"
                    :options="provinces.data"
                    label="name_with_type"
                    value="name"
                    placeholder="Tìm tên Tỉnh/Thành phố "
                    @input="handleProvinceChange"
                    class="mb-4"
                ></v-select>
                <div v-if="loadingDistricts" class="text-gray-500">Đang tải quận/huyện...</div>
  
                <label class="block mb-2">Quận/Huyện:</label>
                <v-select
                    v-model="form.districtName"
                    :options="districts.data"
                    label="name_with_type"
                    value="name"
                    placeholder="Tìm tên Quận/Huyện "
                    :disabled="!form.provinceName || loadingDistricts"
                    @input="handleDistrictChange"
                    class="mb-4"
                >
                  <template v-if="districts.length === 0 && !loadingDistricts && form.provinceName" #no-options>
                    Không có quận/huyện
                  </template>
                </v-select>
                <div v-if="loadingWards" class="text-gray-500">Đang tải xã/phường...</div>
  
                <label class="block mb-2">Xã/Phường:</label>
                <v-select
                    v-model="form.wardName"
                    :options="wards.data"
                    label="name_with_type"
                    value="name"
                    placeholder="Tìm tên Xã/Phường "
                    :disabled="!form.districtName || loadingWards"
                    @input="handleWardChange"
                    class="mb-4"
                >
                  <template v-if="wards.length === 0 && !loadingWards && form.districtName" #no-options>
                    Không có xã/phường
                  </template>
                </v-select>
  
                <label class="block mb-2">Địa chỉ:</label>
                <input type="text" v-model="form.address" class="border px-4 py-2 w-full mb-4">
  
                <label class="block mb-2">Phone:</label>
                <input type="text" v-model="form.phone" class="border px-4 py-2 w-full mb-4">
  
                <label class="block mb-2">Capacity:</label>
                <input type="number" v-model="form.capacity" class="border px-4 py-2 w-full mb-4">
  
                <div class="flex justify-end">
                  <button type="button" class="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                          @click="closeModal">Đóng</button>
                  <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Lưu</button>
                </div>
              </form>
            </div>
          </div>
  
          <div v-if="showModal && modalType === 'delete'"
               class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div class="bg-white p-6 rounded shadow-lg w-1/3">
              <h2 class="text-xl font-bold mb-4">Xác nhận xóa</h2>
              <p>Bạn có chắc chắn muốn xóa rạp <strong>{{ form.name }}</strong> (ID: {{ form.cinemaId }})
                không?</p>
              <div class="flex justify-end mt-4">
                <button type="button" class="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                        @click="closeModal">Hủy</button>
                <button class="bg-red-500 text-white px-4 py-2 rounded" @click="handleDelete">Xóa</button>
              </div>
            </div>
          </div>
  
          
        </div>
      </div>
    </div>
  </template>




<script>
import NavbarComponent from './NavbarComponent.vue';
import HeaderComponent from './HeaderComponents.vue';
import { checkAuthAndRedirect } from '@/utils/authGuard';
import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';


export default {
    name: 'CinemasPage',
    components: {
        NavbarComponent,
        HeaderComponent,
        'v-select': vSelect
    },
    data() {
        return {
            showModal: false,
            modalType: '', // 'add', 'edit', 'delete'
           
            form: {
                cinemaId: '',
                name: '',
                posterId:'',
                provinceName: '',
                districtName: '',
                wardName: '',
                phone: '',
                address: '',
                capacity: '',
            },
            cinemas: [],
            posters: [],
            provinces: [],
            districts: [],
            wards: [],
            errorMessage: '',
            loadingProvinces: false,
            loadingDistricts: false,
            loadingWards: false,
        };
    },

    methods: {

        handleProvinceChange(selectedProvince) {
            if (selectedProvince) {
                this.form.provinceName = selectedProvince.name_with_type;
                this.getDistricts(selectedProvince.code);
            } else {
                this.form.provinceName = '';
                this.districts = [];
                this.form.districtName = '';
                this.wards = [];
                this.form.wardName = '';
            }
        },

        handleDistrictChange(selectedDistrict) {
            if (selectedDistrict) {
                this.form.districtName = selectedDistrict.name_with_type;
                this.getWards(selectedDistrict.code);
            } else {
                this.form.districtName = '';
                this.wards = [];
                this.form.wardName = '';
            }
        },

        handleWardChange(selectedWard) {
            if (selectedWard) {
                this.form.wardName = selectedWard.name_with_type;
            } else {
                this.form.wardName = '';
            }
        },

        openModal(type, cinema = null) { // Đổi tên biến 'cinemas' thành 'cinema' cho đồng nhất
            this.modalType = type;
            this.showModal = true;
            this.provinces = [];
            this.districts = [];
            this.wards = [];
            this.form.provinceName = '';
            this.form.districtName = '';
            this.form.wardName = '';

            if (type === 'edit' && cinema) { // Sử dụng 'cinema'
                console.log('Cinema Data:', cinema); // Log 'cinema'
                this.form.cinemaId = cinema.cinema_id;
                this.form.name = cinema.name;
                this.form.posterId = cinema.poster.poster_id;
                this.form.address = cinema.address;
                this.form.provinceName = cinema.province_Name || '';
                this.form.districtName = cinema.district_Name || '';
                this.form.wardName = cinema.ward_Name || '';
                this.form.phone = cinema.phone;
                this.form.capacity = cinema.capacity;
                this.getProvinces(); // Load lại tỉnh, huyện, xã
                if (this.form.provinceName) {
                    this.getDistricts(this.form.provinceName);
                    if (this.form.districtName) {
                        this.getWards(this.form.districtName);
                    }
                }
                
            } else if (type === 'add') {
                this.form = { cinemaId: '',posterId: '', name: '', address: '',  phone: '', capacity: '', provinceName: '', districtName: '', wardName: '' }; 
                this.getProvinces();
            } else if (type === 'delete' && cinema) { // Sử dụng 'cinema'
                this.form = { cinemaId: cinema.cinema_id, name: cinema.name };
            }
        },

        closeModal() {
            this.showModal = false;
            this.mapContentUrl = null;
            this.provinces = [];
            this.districts = [];
            this.wards = [];
            this.form.provinceName = '';
            this.form.districtName = '';
            this.form.wardName = '';
        },

        async getProvinces() {
            this.loadingProvinces = true;
            try {
                const response = await axios.get('https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1');
                this.provinces = response.data.data;
                console.log('Provinces loaded:', this.provinces);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách tỉnh:', error);
                this.errorMessage = 'Lỗi khi tải danh sách tỉnh.';
            } finally {
                this.loadingProvinces = false;
            }
        },

        async getDistricts(provinceNameObject) {
            this.loadingDistricts = true;
            this.districts = [];
            this.form.districtName = '';
            this.wards = [];
            this.form.wardName = '';
            if (provinceNameObject && provinceNameObject.name_with_type) {
                const provinceCode = provinceNameObject.code;
                try {
                    console.log('Fetching districts with provinceCode:', provinceCode);
                    const response = await axios.get(`https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${provinceCode}&limit=-1`);
                    this.districts = response.data.data;
                    console.log('Districts API response:', response.data);
                    console.log('this.districts after API call:', this.districts);
                    console.log('Districts loaded for province', provinceCode, ':', this.districts);
                } catch (error) {
                    console.error('Lỗi khi lấy danh sách huyện:', error);
                    this.errorMessage = 'Lỗi khi tải danh sách huyện.';
                } finally {
                    this.loadingDistricts = false;
                }
            }
        },

        async getWards(districtNameObject) {
            this.loadingWards = true;
            this.wards = [];
            this.form.wardName = '';
            if (districtNameObject && districtNameObject.name_with_type) {
                const districtCode = districtNameObject.code;
                try {
                    console.log('Fetching wards with districtCode:', districtCode);
                    const response = await axios.get(`https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${districtCode}&limit=-1`);
                    this.wards = response.data.data;
                    console.log('Wards API response:', response.data);
                    console.log('this.wards after API call:', this.wards);
                    console.log('Wards loaded for district', districtCode, ':', this.wards);
                } catch (error) {
                    console.error('Lỗi khi lấy danh sách xã/phường:', error);
                    this.errorMessage = 'Lỗi khi tải danh sách xã/phường.';
                } finally {
                    this.loadingWards = false;
                }
            }
        },

        async handleSubmit() {
            const token = Cookies.get('authToken');
            if (!token) {
                alert('Token not found! Please log in.');
                return;
            }

            const decodedToken = jwtDecode(token);
            if (decodedToken.role !== 'admin') {
                alert('Bạn không có quyền thực hiện hành động này.');
                return;
            }

            try {
                console.log('provinceName before submit:', this.form.provinceName);
                console.log('districtName before submit:', this.form.districtName);
                console.log('wardName before submit:', this.form.wardName);
                const formData = {
                    name: this.form.name,
                    poster_id: this.form.posterId,
                    province_name: this.form.provinceName.name_with_type,
                    district_name: this.form.districtName.name_with_type,
                    ward_name: this.form.wardName.name_with_type,
                    phone: this.form.phone,
                    capacity: this.form.capacity,
                    address: this.form.address,
                };


                const url = this.modalType === 'add'
                    ? `${import.meta.env.VITE_API_BASE_URL}/api/cinemas`
                    : `${import.meta.env.VITE_API_BASE_URL}/api/cinemas/${this.form.cinemaId}`;

                const method = this.modalType === 'add' ? 'POST' : 'PUT';

                const response = await fetch(url, {
                    method,
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json', // Important:  Tell the server we're sending JSON
                    },
                    body: JSON.stringify(formData), //  Convert data to JSON
                });

                const responseData = await response.json();

                if (!response.ok) {
                    throw new Error(responseData.message || 'Failed to perform the action');
                }

                alert(this.modalType === 'add'
                    ? 'Rạp phim đã được thêm thành công!'
                    : 'Thông tin rạp phim đã được cập nhật thành công!');

                this.getallCinema();
                this.closeModal();
            } catch (error) {
                console.error('Lỗi:', error);
                alert(`Lỗi: ${error.message}`);
            }
        },

        async handleDelete() {
            try {
                const token = Cookies.get('authToken');
                if (!token) {
                    alert('Token not found! Please log in.');
                    return;
                }

                console.log('Attempting to delete cinema with ID:', this.form.cinemaId);

                if (!this.form.cinemaId) {
                    throw new Error('No cinema selected for deletion');
                }

                const response = await axios.delete(
                    `${import.meta.env.VITE_API_BASE_URL}/api/cinemas/${this.form.cinemaId}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );

                if (response.status !== 200) {
                    throw new Error(response.data.message || 'Failed to delete cinema');
                }

                alert('Rạp phim đã được xóa thành công!');
                this.getallCinema();
                this.closeModal();
            } catch (error) {
                console.error('Delete error:', error);
                alert(`Xóa thất bại: ${error.message}`);
            }
        },

        async getallCinema() {
            try {
                const apiUrl = import.meta.env.VITE_API_BASE_URL + '/api/cinemas';
                const response = await axios.get(apiUrl);

                console.log('Full API response (Cinemas):', response);

                if (response.data && response.data.cinemas) {
                    this.cinemas = response.data.cinemas;
                } else if (response.data && Array.isArray(response.data)) {
                    this.cinemas = response.data;
                } else {
                    this.cinemas = [];
                    this.errorMessage = 'Không có rạp nào.';
                }

                console.log('cinemas:', this.cinemas);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách rạp:', error.response ? error.response.data : error.message);
                this.errorMessage = 'Lỗi khi lấy danh sách rạp.';
            }
        },

        async getAllPosters() {
  try {
    const apiUrl = import.meta.env.VITE_API_BASE_URL + '/api/posters';
    const response = await axios.get(apiUrl);
    console.log('Posters API response:', response.data);

    if (response.data && response.data.posters && Array.isArray(response.data.posters)) {
      this.posters = response.data.posters; // Access the 'posters' array
    } else {
      this.posters = [];
      console.error('Unexpected poster data format:', response.data);
      this.errorMessage = 'Lỗi khi lấy danh sách poster.';
    }

    console.log('Processed posters array:', this.posters);

  } catch (error) {
    console.error('Lỗi khi lấy danh sách poster:', error);
    this.errorMessage = 'Lỗi khi lấy danh sách poster.';
  }
        },

        getPosterName(posterId) {
            if (!this.posters || !this.posters.length) return 'N/A';
            const foundPoster = this.posters.find(poster => poster.poster_id === posterId);
            return foundPoster ? foundPoster.name : 'N/A';
        }
        
    },

    mounted() {
        this.getallCinema();
        this.getAllPosters().then(() => {
    console.log('this.validPosters in mounted:', this.validPosters);
  });
    },

    watch: {
        'form.provinceName': function (newVal) {
            if (newVal) {
                this.getDistricts(newVal);
            } else {
                this.districts = [];
                this.form.districtName = '';
                this.wards = [];
                this.form.wardName = '';
            }
        },
        'form.districtName': function (newVal) {
            if (newVal) {
                this.getWards(newVal);
            } else {
                this.wards = [];
                this.form.wardName = '';
            }
        },
        showModal: function (newVal) {
            if (newVal && this.modalType === 'add') {
                this.getProvinces();
            }
            
        }
    },
    beforeCreate() {
        checkAuthAndRedirect(this.$router);
    },
    computed: {
        validPosters() {
    return this.posters.filter(poster => poster && typeof poster.name === 'string' && poster.name.trim() !== '');
  },
       
        getProvinceName() {
            return (provinceName) => {
                if (Array.isArray(this.provinces)) {
                    const province = this.provinces.find(p => p.name_with_type === provinceName);
                    return province ? province.name_with_type : '';
                }
                return '';

            };
        },
        getDistrictName() {
            return (districtName) => {
                if (Array.isArray(this.districts)) {
                    const district = this.districts.find(d => d.name_with_type === districtName);
                    return district ? district.name_with_type : '';
                }
                return '';


            };
        },
        getWardName() {
            return (wardName) => {
                if (Array.isArray(this.wards)) {
                    const ward = this.wards.find(w => w.name_with_type === wardName);
                    return ward ? ward.name_with_type : '';
                }


                return '';


            };
        }
    }
};
</script>

