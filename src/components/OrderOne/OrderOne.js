import React from 'react'
import { useDispatch } from 'react-redux'
import { orderAction } from '../../store/order'

import { makeStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            marginBottom: theme.spacing(2),
        },
        '& .MuiBadge-root': {
            marginRight: theme.spacing(4),
        },
    },
}))

export const OrderOne = () => {
    const classes = useStyles()

    const [count, setCount] = React.useState(1)

    const dispatch = useDispatch()

    const handleOrderDecrease = () => {
        setCount(Math.max(count - 1, 0))
        dispatch(orderAction.outOrder(1))
    }
    const handleOrderIncrease = () => {
        setCount(count + 1)
        dispatch(orderAction.addOrder(1))
    }
    return (
        <div className={classes.root}>
            <div>
                <Typography variant="button" display="block" gutterBottom>
                    customer one
                </Typography>
                <Badge color="secondary" badgeContent={count}>
                    <ShoppingCartIcon />
                </Badge>
                <ButtonGroup>
                    <Button aria-label="reduce" onClick={handleOrderDecrease}>
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button aria-label="increase" onClick={handleOrderIncrease}>
                        <AddIcon fontSize="small" />
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}
