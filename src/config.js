function getConfig() {
    return {
        api_key:
            process.env.REACT_APP_MOJOAUTH_APIKEY ||
            'YOUR_API_KEY',
        redirect_url:
                process.env.REACT_APP_REDIRECT_URL || 'http://localhost:3000/dashboard',
    };
 }
 
 export default getConfig();

 