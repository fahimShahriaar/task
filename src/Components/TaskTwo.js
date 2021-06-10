import React, { useEffect, useState } from 'react';
let dataListSet = [
    {
        moduleName: "Configuration",
        activityName: "Item Category",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false
    },
    {
        moduleName: "Configuration",
        activityName: "Item",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false
    }
]

const TaskTwo = () => {
    const [dataList, setDataList] = useState([]);
    useEffect(() => {
        setDataList(dataListSet);
    }, [])



    const handleClick = (i, e) => {
        const eventName = e.target.name;
        const updateData = [...dataList];
        // console.log(updateData);
        updateData[i][eventName] = !(updateData[i][eventName]);
        // console.log('Array Element:', i, eventName, updateData[i][eventName]);
        setDataList(updateData);
        console.log(dataList);
        console.log('Array Element:', i + ', ', eventName, dataList[i][eventName]);
    }

    return (
        <div className="container p-5">
            <h3>Task Two</h3>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Module Name</th>
                            <th>Activity Name</th>
                            <th>Create</th>
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Approve</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataList.map((rowData, i) =>
                                <tr key={i}>
                                    <td>{rowData.moduleName}</td>
                                    <td>{rowData.activityName}</td>
                                    <td> <input onClick={(e) => handleClick(i, e)} type="checkbox" name="isCreate" id="" /> </td>
                                    <td> <input onClick={(e) => handleClick(i, e)} type="checkbox" name="isView" id="" /> </td>
                                    <td> <input onClick={(e) => handleClick(i, e)} type="checkbox" name="isEdit" id="" /> </td>
                                    <td> <input onClick={(e) => handleClick(i, e)} type="checkbox" name="isDelete" id="" /> </td>
                                    <td> <input onClick={(e) => handleClick(i, e)} type="checkbox" name="isApprove" id="" /> </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TaskTwo;