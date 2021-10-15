import { connect } from "react-redux";
import AllCategories from "../components/AllCategories";
import { getNews } from "../store/actions/GetNews";

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch =>({
    getNews : (categoryName) => dispatch(getNews(categoryName)),
})

export const AllCategoriesContainer = connect(mapStateToProps,mapDispatchToProps)(AllCategories);

