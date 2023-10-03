import { ReactNode } from "react";
export interface RouteType {
    id:number,
    path:string,
    Compo:any,
}

export interface ImgSliderType {
    id:number,
    image_url:string,
    caption:string,
    created_at:string,
    updated_at:string,
    archive?:boolean,
  }

export interface CategoryType {
  id:number,
  name:string,
  archive?:boolean,
}

export interface BookType extends CategoryType{
    category_id:number,
    image?:any,
    outline:string,
    description?:string,
    plan?:string,
    sound?:any,
    author?:string,
    created_at?:Date,
    updated_at?:Date,
  }

  export interface sideBarType{
    id:number,
    label:string,
    value:string,
    Icon:any,
    route:string
  }
  export interface ChildrenType {
      children:ReactNode;
  }

  export interface AlertType {
    color?:string,
    bgcolor?:string,
    message:string,
  }

  export interface userListTable extends CategoryType{
    email?:string,
    address: string,
    phone: string,
    image: string,
    role:string,
    gender: string,
    plan:string,
    status:{
      st1?:any,
      st2?:any,
      st3?:any,
  }[]
  }


  export interface  ProfileType {
    id:number,
    name:string,
    email:string,
    img?:string
    address?:string,
    role:string,
    plan:string,
    phone?:string,
    gender?:string,
    path?:string,
    clsName?:string,
}
