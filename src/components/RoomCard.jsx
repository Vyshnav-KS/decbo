import { StyleSheet, css } from 'aphrodite'
import React from 'react'
import cardImg from '../media/images/card.png'
import Loc from "../media/icons/location_icn.png"
import { fontSize, padding } from '@mui/system'

const RoomCard = () => {
    return (
        <div className={css(styles.root)}>
            <div className={css(styles.container)}>
                <div className={css(styles.card)}>
                    <img src={cardImg} alt="blaah" className={css(styles.cardImage)} />
                    <div className={css(styles.cardHeading)} > Shikara Hotel </div>
                    <div className={css(styles.location)}>
                        <div><img src={Loc} alt="location-icon" /></div>
                        <div className={css(styles.locationtxt)}>JL Asian No. 72 Yogyakarta</div>
                    </div>
                    <div className={css(styles.price)}>
                    $42.72 
                    <span className={css(styles.pnight)}>/ night</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    root:{
        background: "#FFFFFF",
        boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.25)",
        borderRadius: 20,
        maxWidth: 301,
    },
    card:{
        display:"flex",
        flexDirection: "column",
        padding: 16
    },
    cardImage:{
       borderRadius: 20 
    },
    cardHeading:{
        fontSize: 25,
        fontWeight: 600,
        marginTop: 20
    },
    location:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    locationtxt:{
        color: "#A2A7B2",
        fontSize: 15,
        fontWeight: 500,
        marginLeft: 8
    },
    price:{
        fontSize: 25,
        fontWeight: 600,
    },
    pnight:{
        fontSize: 15,
        fontWeight: 500,
        color: "#A2A7B2",
        marginTop: 16,
        marginBottom: 19
    },
    

})

export default RoomCard
