import {create} from "zustand";
import axios from "axios";

const FeatureStore = create((set)=>({
    FeatureList:null,
    FeatureListRequest:async ()=>{
        let res = await axios.get(`/api/v1/FeatureList`)
        if(res.data['status']==="success"){
            set({FeatureList:res.data['data']})
        }
    },
    legalDetails:null,
    legalDetailsRequest:async (type)=>{
        let res = await axios.get(`/api/v1/LegalDetails/${type}`)
        if(res.data['status']==="success"){
            set({legalDetails:res.data['data']})
        }
    }
}))

export default FeatureStore;