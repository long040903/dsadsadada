<template>
    <div class="flex justify-end mb-4">
      <div class="ml-4 flex items-center">
        <i class="fas fa-bell text-gray-600 text-xl"></i>
        <div class="ml-4 flex items-center space-x-4">
          <span class="text-gray-600">{{ userName }}</span>
          <div class="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full">
            {{ userInitial }}
          </div>
          <button @click="logout" class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Cookies from 'js-cookie';
  
  export default {
    name: "HeaderAdmin",
    data() {
      return {
        userName: "",
      };
    },
    computed: {
      userInitial() {
        return this.userName ? this.userName.charAt(0).toUpperCase() : "A";
      },
    },
    created() {
      const token = Cookies.get("authToken");
      if (token) {
        const payload = this.parseJwt(token);
        console.log("Token payload:", payload);
        this.userName = payload?.fullname || payload?.username || "Admin";
      }
    },
    methods: {
      parseJwt(token) {
        try {
          const base64Url = token.split('.')[1];
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const jsonPayload = decodeURIComponent(
            atob(base64)
              .split('')
              .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
              .join('')
          );
          return JSON.parse(jsonPayload);
        } catch (e) {
          console.error("Invalid token", e);
          return null;
        }
      },
      logout() {
        Cookies.remove("authToken");
        this.$router.push("/admin/login");
      },
    },
  };
  </script>
  