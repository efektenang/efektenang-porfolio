import React, { useEffect, useState } from 'react'
import { order } from '../../data/data'
import OrderList from './OrderList'

const RecentOrders: React.FC = () => {
    return <OrderList orders={order} />
}

export default RecentOrders