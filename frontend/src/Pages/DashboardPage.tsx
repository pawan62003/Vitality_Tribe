import React, { useEffect, useState } from 'react'
import SideNavigationBar from '../Components/SideNavigationBar'
import { useDispatch, useSelector } from 'react-redux'
import { getDashboardItems } from '../Redux/DashboardReducer/action'
import Stats from '../Components/Stats'
import Example from '../Components/PieChart'
import Charts from '../Components/PieChart'

interface login {
  isError: boolean,
  isloading: boolean,
  isAuth: boolean,
  token: string,
  user: any
}

interface store {
  LoginReducer: login
}

interface dashboard {
  isError: boolean,
  isloading: boolean,
  dashboard: any
}

interface dashboardstore {
  DashboardReducer: dashboard
}

const initialObj = {
  userID: "",
  user: "",
  Energy: 0,
  Energy_percentage: 0,
  Protein_percentage: 0,
  Fat_percentage: 0,
  Netcarbs_percentage: 0,
  Protein: 0,
  Fat: 0,
  Netcarbs: 0,
  quantity: { type: Number, default: 1 },
  caloriesburnt: 0,
  caloriesremaining: 0,
  caloriesconsumed: 0
}

const DashboardPage = () => {
  const [state, setState] = useState(initialObj)
  const { token, user } = useSelector((store: store) => store.LoginReducer);
  const { dashboard } = useSelector((store: dashboardstore) => store.DashboardReducer);
  const dispatch = useDispatch();

  const Calculator = (dashboard: any) => {
    if (dashboard.length != 0) {
      let caloriesconsumed = dashboard.reduce((sum: Number, current: any) => {
        let calories
        if (current.type == "food") {
          calories = current.Energy;
        } else {
          calories = 0;
        }
        return sum + calories;
      }, 0);
      let energyPercent = ((caloriesconsumed / 2481) * 100).toFixed(0);

      let caloriesremaining = 2184 - caloriesconsumed;

      let caloriesburnt = dashboard.reduce((sum: Number, current: any) => {
        let calories
        if (current.type == "food") {
          calories = current.Energy;
        } else if (current.type = "exercise") {
          calories = (-1 * current.Energy);
        }
        return sum + calories;
      }, 0);
      let totalprotein = dashboard.reduce((sum: Number, current: any) => {
        let protein
        if (current.type == "food") {
          protein = current.Protein;
        } else {
          protein = 0
        }
        return sum + protein;
      }, 0);
      let proteinPercent = ((totalprotein / 177.6) * 100).toFixed(0);
      let totalNetcarbs = dashboard.reduce((sum: Number, current: any) => {
        let Netcarbs
        if (current.type == "food") {
          Netcarbs = current.Netcarbs;
        } else {
          Netcarbs = 0
        }
        return sum + Netcarbs;
      }, 0);
      let NetcarbsPercent = ((totalNetcarbs / 319.6) * 100).toFixed(0);
      let totalFat = dashboard.reduce((sum: Number, current: any) => {
        let Netcarbs
        if (current.type == "food") {
          Netcarbs = current.Netcarbs;
        } else {
          Netcarbs = 0
        }
        return sum + Netcarbs;
      }, 0);


      let FatPercent = ((totalFat / 94.7) * 100).toFixed(0);

      setState({
        userID: user._id,
        user: `${user.firstname} ${user.lastname}`,
        Energy: caloriesconsumed,
        Energy_percentage: +energyPercent,
        Protein: totalprotein,
        Protein_percentage: +proteinPercent,
        Fat: totalFat,
        Fat_percentage: +FatPercent,
        Netcarbs: totalNetcarbs,
        Netcarbs_percentage: +NetcarbsPercent,
        quantity: { type: Number, default: 1 },
        caloriesburnt: caloriesburnt,
        caloriesremaining: caloriesremaining,
        caloriesconsumed: caloriesconsumed
      })
    }
  }

  useEffect(() => {
    getDashboardItems(token, user._id, dispatch)
  }, [])


  useEffect(() => {
    Calculator(dashboard)
  }, [dashboard])

  console.log(state);
  return (
    <div className='flex'>
      <SideNavigationBar />
      <div className='w-3/4 m-8'>
        <h1 className='text-center text-2xl font-bold py-4'>YOUR DASHBOARD</h1>
        <div className='w-full shadow-lg rounded-[5px] p-6 border border-gray-400 overflow-y-scroll '>
          <table className="min-w-full divide-y divide-gray-200 ">
            <thead className='border-b-black border-b'>
              <th>Name</th>
              <th>Quantity(cup for food/min for exercise)</th>
              <th>Energy</th>
            </thead>
            <tbody id="dashboardAppend">
              {
                dashboard.length == 0 ? <tr>
                  No products in dashboard. addmore food and exercises
                </tr> : dashboard.map((item: any) => {
                  if (item.type == "food") {
                    return <tr>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.Energy}</td>
                    </tr>
                  } else {
                    return <tr>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{(-1 * item.Energy)}</td>
                    </tr>
                  }
                })
              }
            </tbody>
          </table>
        </div>
        <div>
          {
            dashboard.length != 0 ? <div >
              <Stats obj={state}/>

                 <Charts/>
              
            </div>:
            <div>

            </div>
        }
        </div>
      </div>
    </div>
  )
}

export default DashboardPage



/*
 let totalcalories = dashboard.reduce((sum,current)=>{
        let calories = +current.Energy;
        return sum+calories;
    },0);
    let totalprotein = reduceData.reduce((sum,current)=>{
        let protein = +current.Protein;
        return sum+protein;
    },0);
    let proteinPercent = (totalprotein/177.6)*100;
    let totalNetcarbs = reduceData.reduce((sum,current)=>{
        let Netcarbs = +current.Netcarbs;
        return sum+Netcarbs;
    },0);
    let NetcarbsPercent = (totalNetcarbs/319.6)*100;
    let totalFat = reduceData.reduce((sum,current)=>{
        let Fat = +current.Fat;
        return sum+Fat;
    },0);

     
    let FatPercent = (totalFat/94.7)*100;
    let remaining = 2841 - totalcalories;
    
    let Netcal = dashboardData.reduce((sum,current)=>{
        let energy;
        if(current[0]=="food"){
           energy = +current[1].Energy; 
        }else{
           energy = +(current[1].Energy*-1);
        }
        return sum+energy;
    },0);

    let energyPercent = (totalcalories/2481)*100;
    let energy = totalcalories-Netcal;
*/