import { connect } from "react-redux";
import Categories from "../components/Categories";

const mapStateToProps = state => ({
    news: state.news
})

const mapDispatchToProps = dispatch =>({
})

export const CategoriesContainer = connect(mapStateToProps,mapDispatchToProps)(Categories);

