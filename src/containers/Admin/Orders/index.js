import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
// import Box from '@mui/material/Box'
// import Collapse from '@mui/material/Collapse'
// import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
// import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import { Container, Menu, LinkMenu } from './styles'
import api from '../../../services/api'
import status from './order-status'
import Row from './row'
import formatDate from '../../../utils/formatDate'

function Orders () {
  const [orders, setOrders] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])
  const [activeStatus, setActiveStatus] = useState(1)
  const [rows, setRows] = useState([])

  useEffect(() => {
    async function loadOrders () {
      const { data } = await api.get('orders')

      setFilteredOrders(data)
      setOrders(data)
    }

    loadOrders()
  }, [])

  function createData (order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products
    }
  }

  useEffect(() => {
    const newRows = filteredOrders.map(ord => createData(ord))
    setRows(newRows)
  }, [filteredOrders])

  function handleStatus (status) {
    if (status.id === 1) {
      setFilteredOrders(orders)
    } else {
      const newOrders = orders.filter(order => order.status === status.value)
      setFilteredOrders(newOrders)
    }
    setActiveStatus(status.id)
  }

  return (
    <Container>
      <Menu>
        {status && status.map(status => (
          <LinkMenu key={status.id}
            onClick={() => handleStatus(status)}
            IsActiveStatus={activeStatus === status.id}
          >
            {status.label}
          </LinkMenu>
        ))}
      </Menu>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map((row) => (
                <Row key={row.orderId} row={row} />
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Orders
