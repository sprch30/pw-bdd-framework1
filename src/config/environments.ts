export type Env = 'qa' | 'uat';
interface EnvConfig{
    baseUrl: string;
    apiUrl: string;
}

export const environments: Record<Env, EnvConfig> = {
    qa:{
        baseUrl: 'https://www.saucedemo.com',
        apiUrl: 'https://restful-booker.herokuapp.com',
    },
    uat: {
        baseUrl: 'https://www.saucedemo.com',
        apiUrl: 'https://restful-booker.herokuapp.com'
    },
};