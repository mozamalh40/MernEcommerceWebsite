import axios from "axios";
import {
  ALL_CATEGORY_FAIL,
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_REQUEST,
  DELETE_CATEGORY_REQUEST,
  CLEAR_ERRORS,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_SUCCESS,
  NEW_CATEGORY_FAIL,
  NEW_CATEGORY_REQUEST,
  NEW_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAIL,
  UPDATE_CATEGORY_SUCCESS,
  CATEGORY_DETAILS_FAIL,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  ADMIN_CATEGORY_FAIL,
  ADMIN_CATEGORY_REQUEST,
  ADMIN_CATEGORY_SUCCESS,

} from "../constants/categoryConstants";


// Get All Categorys
export const getCategory=()=>async(dispatch)=>{
  try {
      dispatch({
          type:ALL_CATEGORY_REQUEST
      })
    
  let link=`/api/v1/categorys`
 
      const {data}=await axios.get(link)
      dispatch({
          type:ALL_CATEGORY_SUCCESS,
          payload:data
      })
  } catch (error) {
      dispatch({
          type:ALL_CATEGORY_FAIL,
          payload:error.response.data.message
      })
  }
  }


  // for admin get all categorys
export const getAdminCategory=()=>async(dispatch)=>{
  try {
      dispatch({
          type:ADMIN_CATEGORY_REQUEST
      })
      const {data}=await axios.get("/api/v1/admin/categorys")
      dispatch({
          type:ADMIN_CATEGORY_SUCCESS,
          payload:data.categorys
      })
  } catch (error) {
      dispatch({
          type:ADMIN_CATEGORY_FAIL,
          payload:error.response.data.message
      })
  }
  }


//get category details
export const getCategoryDetails=(id)=>async(dispatch)=>{
  try {
      dispatch({
          type:CATEGORY_DETAILS_REQUEST
      })
      const {data}=await axios.get(`/api/v1/category/${id}`)
      dispatch({
          type:CATEGORY_DETAILS_SUCCESS,
          payload:data.category
      })
  } catch (error) {
      dispatch({
          type:CATEGORY_DETAILS_FAIL,
          payload:error.response.data.message
  
      })
  }
  } 



  //add category

  export const createCategory= (categoryData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_CATEGORY_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.post(`/api/v1/admin/category/new`,categoryData, config);
  
      dispatch({
        type: NEW_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NEW_CATEGORY_FAIL,
        payload: error.response.data.message,
      });
    }
  };



          // Update Category
  export const updateCategory = (id, categoryData) => async (dispatch) => {
            try {
              dispatch({ type: UPDATE_CATEGORY_REQUEST });
          
              const config = {
                headers: { "Content-Type": "application/json" },
              };
          
              const { data } = await axios.put(
                `/api/v1/admin/category/${id}`,
                categoryData,
                config
              );
          
              dispatch({
                type: UPDATE_CATEGORY_SUCCESS,
                payload: data.success,
              });
            } catch (error) {
              dispatch({
                type: UPDATE_CATEGORY_FAIL,
                payload: error.response.data.message,
              });
            }
          };



// Delete Category
export const deleteCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CATEGORY_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/category/${id}`);

    dispatch({
      type: DELETE_CATEGORY_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};











///ya bs errors ko null krna k kam ana haa
export const clearErrors=()=>async(dispatch)=>{
    dispatch({
      type:CLEAR_ERRORS
    })
}