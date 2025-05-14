import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSales } from '../../redux/salesSlice';

const SaleInvoicesGrid = () => {
    const dispatch = useDispatch();
    const { sales, status } = useSelector((state) => state.sales);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchSales());
        }
    }, [dispatch, status]);


    return (
        <div className="p-6">
            <table className="table-auto w-full mt-4 bg-gray-800 rounded">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Ticari Ünvanı</th>
                        <th className="px-4 py-2">Yetkili</th>
                        <th className="px-4 py-2">Ödeme Türü</th>
                        <th className="px-4 py-2">Genel Toplam</th>
                        <th className="px-4 py-2">Tarih</th>
                        <th className="px-4 py-2">Son Düzenleme</th>
                        <th className="px-4 py-2">Tür</th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>
                <tbody className="table-auto w-full mt-4 bg-gray-800">
                    {sales.map((sale) => (
                        <tr key={sale.id}>
                            <td className="border border-gray-700 px-4 py-2">{sale.customerName}</td>
                            <td className="border border-gray-700 px-4 py-2">{sale.customerManager}</td>
                            <td className="border border-gray-700 px-4 py-2">{sale.paymentType}</td>
                            <td className="border border-gray-700 px-4 py-2">{sale.totalPrice} TL</td>
                            <td className="border border-gray-700 px-4 py-2"> {new Date(sale.saleDate).toLocaleDateString("tr-TR", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                            })}</td>
                            <td className="border border-gray-700 px-4 py-2">{new Date(sale.lastUpdated).toLocaleDateString("tr-TR", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                            })}</td>
                            <td className="border border-gray-700 px-4 py-2">{sale.type}</td>
                            <td className="border border-gray-700 px-4 py-2 max-w-40">
                                <div className="flex justify-center gap-3">
                                    {/* Sil Butonu */}
                                    <button
                                        className="text-white hover:bg-red-400 bg-red-500 px-2 py-1 rounded font-light text-base w-20"
                                    >
                                        Sil
                                    </button>

                                    {/* Düzenle Butonu */}
                                    <button
                                        className="text-white hover:bg-orange-400 bg-orange-500 px-2 py-1 rounded font-light text-base w-20"
                                    >
                                        Düzenle
                                    </button>

                                    {/* Detaylar Butonu */}
                                    <button
                                        className="text-white hover:bg-green-400 bg-green-500 px-2 py-1 rounded font-light text-base w-20"
                                    >
                                        Detaylar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SaleInvoicesGrid;