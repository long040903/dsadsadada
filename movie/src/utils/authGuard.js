import Cookies from 'js-cookie';

export function checkAuthAndRedirect(router) {
    const authToken = Cookies.get('authToken');
    console.log(authToken);
    if (!authToken) {
        router.push('/admin/login');
    }
}
