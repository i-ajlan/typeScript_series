type itemType =  {_id:string, _name:string, _isEdited:boolean}

interface Item{
    id:string,
    name:string,
    isEdited:boolean,
    edit():itemType | void,
    delete():void
}

class ItemElement implements Item{
    constructor(
        private _id:string,
        private _name:string,
        private _isEdited:boolean = false
    ){}

    get id():string{
        return this._id;
    }
    set id(id:string){
        this._id=id;
    }
    
    get name():string{
        return this._name;
    }

    set name(name:string){
        this._name = name
    }

    get isEdited():boolean{
        return this._isEdited
    }

    set isEdited(isEdited:boolean){
        this._isEdited = isEdited
    }

    public edit():itemType | void =>{
        const itemObject:string | null = localStorage.getItem('items');
        if(!itemObject)
            return;
        if(this.isEdited === false){

        }
        this.isEdited =
        const itemParsed: itemType[] = JSON.parse(itemObject);
        // const a:string = id 
        const itemSelected:itemType = itemParsed.filter((item) => {return item._id == this._id as string} );
        
    }
}