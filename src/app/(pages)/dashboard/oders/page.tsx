"use client";

import { useState } from "react";

interface Order {
  id: number;
  customerName: string;
  orderDate: string;
  status: string;
  total: number;
}

export default function Orders() {
  // Dummy orders data
  const initialOrders: Order[] = [
    { id: 1, customerName: "John Doe", orderDate: "2025-01-20", status: "Pending", total: 150.0 },
    { id: 2, customerName: "Jane Smith", orderDate: "2025-01-18", status: "Shipped", total: 120.5 },
    { id: 3, customerName: "Sarah Lee", orderDate: "2025-01-17", status: "Processing", total: 200.0 },
  ];

  const [orders, setOrders] = useState<Order[]>(initialOrders);

  // Function to update order status
  const updateOrderStatus = (orderId: number, newStatus: string) => {
    console.log(`Updating order ${orderId} status to ${newStatus}`);
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  // Function to get status color based on order status
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "text-red-500"; // Yellow for Pending
      case "Processing":
        return "text-blue-500"; // Blue for Processing
      case "Shipped":
        return "text-orange-500"; // Green for Shipped
      case "Delivered":
        return "text-green-600"; // Gray for Delivered
      default:
        return "text-black"; // Default to black
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.customerName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.orderDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {/* Apply dynamic text color based on status */}
                  <span className={getStatusColor(order.status)}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">${order.total.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
