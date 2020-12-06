/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PriceInStockDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 35px;
  margin-bottom: 18px;
  width: 268.223px;
`;

const PriceDiv = styled.div`
  display: flex;
  width: 106.367px;
`;

const PriceP = styled.p`
  display: block;
  font-size: 28px;
  font-weight: 500;
  line-height 36px;
  margin-block-end: 0px;
  margin-block-start: 0px;
  margin-bottom: 0px;
  margin-inline-end: 12px;
  margin-inline-start: 0px;
  margin-bottom: 18px;
  width: 94.375px;
`;

const InStockDiv = styled.div`
  display: flex;
  height: 17.9883px;
  margin-bottom: 0px;
  width: 73.0469px;
`;

const CheckSpan = styled.span`
  display: block;
  fill: rgb(34, 34, 34);
  height: 17.9883px;
  margin-bottom: 0px;
  vertical-align: middle;
  width: 17.9883px;
`;

const InStockP = styled.p`
  display: block;
  font-size: 13px;
  font-weight: 500;
  height: 17.9883px;
  line-height 18px;
  margin-block-end: 0px;
  margin-block-start: 0px;
  margin-bottom: 0px;
  margin-inline-end: 0px;
  margin-inline-start: 6px;
  margin-left: 6px;
  margin-right: 0px;
  margin-top: 0px;
  text-align: right;
  white-space: nowrap;
  width: 49.0625px;
`;

function PriceInStock(props) {
  const { data } = props;
  return (
    <PriceInStockDiv>
      <PriceDiv>
        <PriceP>
          $
          {data.price}
        </PriceP>
      </PriceDiv>
      <InStockDiv>
        <CheckSpan>✔</CheckSpan>
        <InStockP>
          <b>
            In Stock:
            {`${data.in_stock}`}
          </b>
        </InStockP>
      </InStockDiv>
    </PriceInStockDiv>
  );
}

// Props typechecking
PriceInStock.propTypes = {
  data: PropTypes.shape({
    best_seller: PropTypes.bool.isRequired,
    carts_item_is_in: PropTypes.number.isRequired,
    in_stock: PropTypes.bool.isRequired,
    item_id: PropTypes.number.isRequired,
    item_name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    price_reduction: PropTypes.string.isRequired,
    us_free_shipping: PropTypes.bool.isRequired,
  }),
};

export default PriceInStock;
