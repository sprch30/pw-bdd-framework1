type Env = 'qa'|'uat'|'prod';
let currentEnv: Env = 'qa';

interface User{
    username: string;
    password: string;
    role?: string;
}

interface Product{
    name: string;
    price: number;
    decription?: string;
}

const standardUser: User ={
    username: 'standard_user',
    password: 'secret_sauce'
};

class BasePage{
    protected readonly baseUrl: string;
    constructor(baseUrl: string){
        this.baseUrl = baseUrl;
    }

    getUrl(path: string): string{
        return `${this.baseUrl}${path}`;
    }
}

class LoginPage extends BasePage{
    private attempts = 0;
    login(user: User): void{
        this.attempts++;
        console.log(`Logging in ${user.username} at ${this.getUrl('/login')}`);
    }
}

class CartPage extends BasePage{
    addItem(product: Product): void{
       console.log(`${product.name} for $${product.price}`)
    }
}

async function fetchToken(): Promise<string>{
    await new Promise(r => setTimeout(r,500));
    return 'abc123'
}

function firstItem<T>(items: T[]): T{
    return items[0];
}

(async () =>{
    const page = new LoginPage('https://www.saucedemo.com');
    page.login(standardUser);

    const cart = new CartPage('https://www.saucedemo.com');
    cart.addItem({name: 'Backpack', price: 29.99});

    const token = await fetchToken();
    console.log('Token:',token);
    console.log(firstItem<string>(['qa','uat']));
    console.log(firstItem<User>([standardUser]).username);
})();