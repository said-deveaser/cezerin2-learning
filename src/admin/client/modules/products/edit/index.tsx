import messages from "lib/text"
import { fetchCategoriesIfNeeded } from "modules/productCategories/actions"
import ProductAdditional from "modules/products/edit/additional"
import ProductAttributes from "modules/products/edit/attributes"
import ProductGeneral from "modules/products/edit/general"
import ProductImages from "modules/products/edit/images"
import ProductInventory from "modules/products/edit/inventory"
import ProductVariants from "modules/products/edit/variants"
import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { cancelProductEdit, fetchProduct } from "../actions"

class ProductEditContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchData()
  }

  componentWillUnmount() {
    this.props.eraseData()
  }

  render() {
    return (
      <div>
        <div style={{ margin: 20, color: "rgba(0, 0, 0, 0.52)" }}>
          {messages.description}
        </div>
        <ProductGeneral />

        <div style={{ margin: 20, color: "rgba(0, 0, 0, 0.52)" }}>
          {messages.products_inventory}
        </div>
        <ProductInventory />

        <div style={{ margin: 20, color: "rgba(0, 0, 0, 0.52)" }}>
          {messages.productVariants}
        </div>
        <ProductVariants />

        <div style={{ margin: 20, color: "rgba(0, 0, 0, 0.52)" }}>
          {messages.attributes}
        </div>
        <ProductAttributes />

        <div style={{ margin: 20, color: "rgba(0, 0, 0, 0.52)" }}>
          {messages.additionalInfo}
        </div>
        <ProductAdditional />

        <div style={{ margin: 20, color: "rgba(0, 0, 0, 0.52)" }}>
          {messages.images}
        </div>
        <ProductImages />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products.editProduct,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchData: () => {
      const { productId } = ownProps.match.params
      dispatch(fetchProduct(productId))
      dispatch(fetchCategoriesIfNeeded())
    },
    eraseData: () => {
      dispatch(cancelProductEdit())
    },
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductEditContainer)
)
