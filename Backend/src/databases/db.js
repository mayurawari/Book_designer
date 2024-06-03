import {connect} from "mongoose";

const connectToDB= async(uri)=>{
    await connect(uri);
}

export default connectToDB;