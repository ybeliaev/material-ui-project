import React from 'react'

import { useSelector } from 'react-redux'

import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `1px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge)

export const Basket = () => {
    const { order } = useSelector((state) => state.order)
    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={order.pizzasCount} color="secondary">
                <ShoppingCartIcon fontSize="large" />
            </StyledBadge>
        </IconButton>
    )
}
