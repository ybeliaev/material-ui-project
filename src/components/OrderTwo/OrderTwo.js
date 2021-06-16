import React from 'react'
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

export const OrderTwo = () => {
    const classes = useStyles()
    const [count, setCount] = React.useState(1)
    const [invisible, setInvisible] = React.useState(false)

    const handleBadgeVisibility = () => {
        setInvisible(!invisible)
    }

    return (
        <div className={classes.root}>
            <div>
                <Typography variant="button" display="block" gutterBottom>
                    customer two
                </Typography>
                <Badge color="secondary" badgeContent={count}>
                    <ShoppingCartIcon />
                </Badge>
                <ButtonGroup>
                    <Button
                        aria-label="reduce"
                        onClick={() => {
                            setCount(Math.max(count - 1, 0))
                        }}
                    >
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                        aria-label="increase"
                        onClick={() => {
                            setCount(count + 1)
                        }}
                    >
                        <AddIcon fontSize="small" />
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}
