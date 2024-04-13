import { toast } from "react-toastify";


export const getProperties = () => {
    let properties = [];
    const storeProperties = localStorage.getItem('properties');
    if(storeProperties){
        properties = JSON.parse(storeProperties)
    }
    return properties;
}

export const saveProperty = property => {
    let properties = getProperties()
    const isExist = properties.find(p=> p.id == property.id)
    if(isExist){
        return toast.error("Already Saved!")
    }
    properties.push(property)
    localStorage.setItem('properties', JSON.stringify(properties))
    toast.success('Property Saved!')
}