interface Items<T>{
    [index: string]: T;
}

export type Keys = string[];
export type Values<T> = T[];

export class Dictionary<T> {
    private items: Items<T> = {};
    private count: number = 0;

    public Add(key: string, value: T) {
        this.items[key] = value;
        this.count++;
    }

    public ContainsKey(key: string): boolean {
        return this.items.hasOwnProperty(key);
    }

    public Count() {
        return this.count;
    }

    public Item(key: string): T {
        return this.items[key];
    }

    public Keys(): Keys {
        let Keys: Keys = [];
        for (let key in this.items) {
                Keys.push(key);
        }
        return Keys;
    }

    public Remove(key: string): T {
        let val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    }

    public Values(): Values<T> {
        let values: Values<T> = [];
        for (let key in this.items) {
                values.push(this.items[key]);
        }
        return values;
    }

}
