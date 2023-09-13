class Character {
    private name?: string;
    public strength: number;
    protected skill: number;

    constructor(name: string, strength: number, skill: number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.strength} points`);
    }
}

class Magician extends Character {
    magicPoints: number;

    constructor(name: string, strength: number, skill: number, magicPoints: number) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}

//generics
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 2], [3])
console.log(numArray);

// decorators
function ExibirNome(target: any) {
    console.log(target);
}

@ExibirNome
class Funcionario {

}


function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version });
    };
}

// attribute decorator
function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}


@apiVersion("1.10")
class Api {
    @minLength(3)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
};

const api = new Api("pra");
console.log(api.name);