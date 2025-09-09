// Register Chart.js components once
'use client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  BubbleController,
  Tooltip,
  Legend,
  Title
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  BubbleController,
  Tooltip,
  Legend,
  Title
)

export default ChartJS
