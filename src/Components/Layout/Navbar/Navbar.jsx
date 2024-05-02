import './Navbar.css'
import React, { useEffect } from 'react'
import { RiSearchLine } from "react-icons/ri";
import { TfiBell } from "react-icons/tfi";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import profile from "../../../Assets/images/profile.jpeg"
import nopro from "../../../Assets/images/nopro.jpg"
import { connect } from 'react-redux';
import { fetchprofile } from '../../../Redux/Profile/ProfileAction';
import  Skeleton, {SkeletonTheme}  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Navbar = ({profiledata, loading, error, fetchprofile}) => {
    // console.log(profiledata)
    console.log(loading)
    useEffect(()=>{
        fetchprofile();
    },[])
    return ( 
        <div className="navbar">
            <div className="navbar-search">
                <RiSearchLine/>
                <input type='text'></input>
            </div>
            <div className="navbar-profile">
                <div className="notification-bell">
                    <TfiBell/>
                </div>
                <div className="profile-details">
                    <div className="dp">

                        <img src={profiledata?.profile_image == null ? nopro :profiledata.profile_image }></img>
                        <div className="tick">
                            <FaCheck/>
                        </div>
                        
                    </div>
                    <div className="profile-name">
                        {loading ? (
                            <SkeletonTheme baseColor="#F5F5F5" highlightColor="#808080" width={100} height={10}>
                                <Skeleton count={2}/>
                            </SkeletonTheme>
                            
                        ): (
                            <>
                            <h4>{profiledata?.fullname}</h4>
                            <p>{profiledata?.email}</p>
                            </>
                        )}
                
                    </div>
                    <div className="profile-more">
                        <FaChevronDown/>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStoreToProps = (state) => {
    console.log(state)
    return {
        loading: state.profile.loading,
        error: state.profile.error,
        profiledata: state.profile.data,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchprofile: () => dispatch(fetchprofile   ()),
    };
};
 
export default connect(mapStoreToProps, mapDispatchToProps)(Navbar);