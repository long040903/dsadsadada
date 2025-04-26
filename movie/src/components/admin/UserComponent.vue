<template>
    <div class="bg-gray-100 text-black">
        <div class="flex">
            <NavbarComponent />
            <div class="flex-1 p-6">
                <HeaderComponent />
                <div class="flex justify-between items-center mb-4">
                    <h1 class="text-2xl font-bold">Quản lý người dùng</h1>
                    <div class="flex items-center">
                        <input class="border rounded-l px-4 py-2"
                            placeholder="Tìm kiếm theo Tên, Email, SĐT" type="text" v-model="searchQuery" @input="filterUsers"/>
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-r">
                            <i class="fas fa-search"></i>
                        </button>
                        <button class="bg-yellow-500 text-white px-4 py-2 ml-2 rounded" @click="refreshUsers">
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
                                <th class="py-2 px-4 border-b">Full name</th>
                                <th class="py-2 px-4 border-b">Name</th>
                                <th class="py-2 px-4 border-b">Email</th>
                                <th class="py-2 px-4 border-b">Phone</th>
                                <th class="py-2 px-4 border-b">CCCD</th>
                                <th class="py-2 px-4 border-b">DoB</th>
                                <th class="py-2 px-4 border-b">Vai trò</th>
                                <th class="py-2 px-4 border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in filteredUsers" :key="user.id">
                                <td class="py-2 px-4 border-b text-center">{{ user.fullname }}</td>
                                <td class="py-2 px-4 border-b text-center">{{ user.username }}</td>
                                <td class="py-2 px-4 border-b text-center">{{ user.email }}</td>
                                <td class="py-2 px-4 border-b text-center">{{ user.phone }}</td>
                                <td class="py-2 px-4 border-b text-center">{{ user.cccd }}</td>
                                <td class="py-2 px-4 border-b text-center">{{ formatDate(user.ngay_sinh) }}</td>
                                <td class="py-2 px-4 border-b text-center">{{ user.role }}</td>
                                <td class="py-2 px-4 border-b text-center">
                                    <button class="text-blue-500" @click="openModal('edit', user)">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="text-red-500 ml-2" @click="openModal('delete', user)">
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
                
                <!-- Modal Thêm mới/Chỉnh sửa -->
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

                        <h2 class="text-xl font-bold mb-4">{{ modalType === 'add' ? 'Thêm mới người dùng' : 'Chỉnh sửa người dùng' }}</h2>
                        <form @submit.prevent="handleSubmit">
                            <div v-if="modalType === 'edit'" class="mb-4">
                                <label class="block mb-2">ID:</label>
                                <input type="text" v-model="form.id" class="border px-4 py-2 w-full" disabled>
                            </div>

                            <div class="mb-4">
                                <label class="block mb-2">Tên đăng nhập:</label>
                                <input type="text" v-model="form.username" class="border px-4 py-2 w-full" :disabled="modalType === 'edit'">
                            </div>

                            <div class="mb-4">
                                <label class="block mb-2">Mật khẩu:</label>
                                <input type="password" v-model="form.password" class="border px-4 py-2 w-full" :required="modalType === 'add'">
                            </div>

                            <div class="mb-4">
                                <label class="block mb-2">Email:</label>
                                <input type="email" v-model="form.email" class="border px-4 py-2 w-full">
                            </div>

                            <div class="mb-4">
                                <label class="block mb-2">Số điện thoại:</label>
                                <input type="text" v-model="form.phone" class="border px-4 py-2 w-full">
                            </div>

                            <div class="mb-4">
                                <label class="block mb-2">CCCD:</label>
                                <input type="text" v-model="form.cccd" class="border px-4 py-2 w-full">
                            </div>

                            <div class="mb-4">
                                <label class="block mb-2">Ngày sinh:</label>
                                <input type="date" v-model="form.ngay_sinh" class="border px-4 py-2 w-full">
                            </div>

                            <div class="mb-4">
                                <label class="block mb-2">Tên đầy đủ:</label>
                                <input type="text" v-model="form.fullname" class="border px-4 py-2 w-full">
                            </div>

                            <div class="mb-4">
                                <label class="block mb-2">Vai trò:</label>
                                <select v-model="form.role" class="border px-4 py-2 w-full">
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>

                            <div class="flex justify-end">
                                <button type="button" class="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                                    @click="closeModal">Đóng</button>
                                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
                                    {{ modalType === 'add' ? 'Thêm mới' : 'Cập nhật' }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Modal Xóa -->
                <div v-if="showModal && modalType === 'delete'"
                    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div class="bg-white p-6 rounded shadow-lg w-1/3">
                        <h2 class="text-xl font-bold mb-4">Xác nhận xóa</h2>
                        <p>Bạn có chắc chắn muốn xóa người dùng <strong>{{ form.fullname }}</strong> (Username: {{ form.username }}) không?</p>
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
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: 'UserPage',
    components: {
        NavbarComponent,
        HeaderComponent
    },
    data() {
        return {
            showModal: false,
            modalType: '', // 'add', 'edit', 'delete'
            form: {
                id: '',
                username: '',
                password: '',
                email: '',
                phone: '',
                cccd: '',
                ngay_sinh: '',
                fullname: '',
                role: 'user'
            },
            users: [],
            filteredUsers: [],
            searchQuery: '',
            errorMessage: '',
        };
    },

    methods: {
        formatDate(dateString) {
            if (!dateString) return '';
            const date = new Date(dateString);
            return date.toLocaleDateString('vi-VN');
        },
        
        filterUsers() {
            if (!this.searchQuery) {
                this.filteredUsers = [...this.users];
                return;
            }
            
            const query = this.searchQuery.toLowerCase();
            this.filteredUsers = this.users.filter(user => 
                user.fullname.toLowerCase().includes(query) ||
                user.email.toLowerCase().includes(query) ||
                user.phone.includes(query)
            );
        },
        
        refreshUsers() {
            this.searchQuery = '';
            this.getAllUsers();
        },

        openModal(type, user = null) {
            this.modalType = type;
            this.showModal = true;

            if (type === 'edit' && user) {
                console.log('Editing user:', user);
                this.form = {
                    id: user.user_id,
                    username: user.username,
                    password: user.password,
                    email: user.email,
                    phone: user.phone,
                    cccd: user.cccd,
                    ngay_sinh: user.ngay_sinh,
                    fullname: user.fullname,
                    role: user.role
                };
            } else if (type === 'add') {
                this.form = {
                    id: '',
                    username: '',
                    password: '',
                    email: '',
                    phone: '',
                    cccd: '',
                    ngay_sinh: '',
                    fullname: '',
                    role: 'user'
                };
            } else if (type === 'delete' && user) {
                this.form = {
                    id: user.user_id,
                    username: user.username,
                    fullname: user.fullname
                };
            }
        },

        closeModal() {
            this.showModal = false;
        },

        async handleSubmit() {
            try {
                const token = Cookies.get('authToken');
                if (!token) {
                    throw new Error('Vui lòng đăng nhập lại');
                }

                const decodedToken = jwtDecode(token);
                if (decodedToken.role !== 'admin') {
                    throw new Error('Bạn không có quyền thực hiện thao tác này');
                }

                if (!this.form.username || !this.form.email) {
                    throw new Error('Tên đăng nhập và email là bắt buộc');
                }

                if (this.modalType === 'add' && !this.form.password) {
                    throw new Error('Mật khẩu là bắt buộc khi thêm mới');
                }

                const userData = {
                    username: this.form.username,
                    email: this.form.email,
                    phone: this.form.phone || null,
                    cccd: this.form.cccd || null,
                    ngay_sinh: this.form.ngay_sinh || null,
                    fullname: this.form.fullname || null,
                    role: this.form.role || 'user'
                };

                if (this.form.password) {
                    userData.password = this.form.password;
                }

                let url, method;
                if (this.modalType === 'add') {
                    url = `${import.meta.env.VITE_API_BASE_URL}/auth/register`;
                    method = 'POST';
                } else {
                    if (!this.form.id) {
                        throw new Error('Không tìm thấy ID người dùng');
                    }
                    url = `${import.meta.env.VITE_API_BASE_URL}/api/users/${this.form.id}`;
                    method = 'PUT';
                }

                const response = await axios({
                    method,
                    url,
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    data: userData,
                    validateStatus: (status) => status >= 200 && status < 500
                });

                if (response.status >= 400) {
                    const errorMsg = response.data?.message || 
                                   response.data?.error || 
                                   `Yêu cầu thất bại với mã lỗi ${response.status}`;
                    throw new Error(errorMsg);
                }

                const successMsg = this.modalType === 'add' 
                    ? 'Thêm người dùng thành công!' 
                    : 'Cập nhật người dùng thành công!';
                
                toast.success(successMsg);

                await this.getAllUsers();
                this.closeModal();

            } catch (error) {
                console.error('Lỗi:', error);
                
                let errorMessage = error.message;
                if (error.response?.data?.errors) {
                    errorMessage = Object.values(error.response.data.errors).join('\n');
                }
                
                toast.error(errorMessage, {
                    autoClose: 5000
                });
            }
        },

        async handleDelete() {
            try {
                const token = Cookies.get('authToken');
                if (!token) {
                    toast.error('Vui lòng đăng nhập lại');
                    return;
                }

                if (!this.form.id) {
                    throw new Error('Không có người dùng được chọn để xóa');
                }

                const response = await axios.delete(
                    `${import.meta.env.VITE_API_BASE_URL}/api/users/${this.form.id}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );

                if (response.status !== 200) {
                    throw new Error(response.data.message || 'Xóa người dùng thất bại');
                }

                toast.success('Xóa người dùng thành công!');
                this.getAllUsers();
                this.closeModal();
            } catch (error) {
                console.error('Lỗi khi xóa:', error);
                toast.error(`Xóa thất bại: ${error.response?.data?.message || error.message}`);
            }
        },

        async getAllUsers() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/users`);
                
                if (response.data && Array.isArray(response.data)) {
                    this.users = response.data;
                    this.filteredUsers = [...this.users];
                } else {
                    this.users = [];
                    this.filteredUsers = [];
                    this.errorMessage = 'Không có người dùng nào.';
                }
            } catch (error) {
                console.error('Lỗi khi lấy danh sách người dùng:', error);
                this.errorMessage = 'Lỗi khi lấy danh sách người dùng.';
            }
        }
    },
    
    beforeCreate() {
        checkAuthAndRedirect(this.$router);
    },
    
    mounted() {
        this.getAllUsers();
    }
};
</script>