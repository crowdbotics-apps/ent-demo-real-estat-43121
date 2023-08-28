import { useRoute } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, Pressable } from "react-native";
import { LineChart, ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, AreaChart, Area, Scatter } from "recharts";

const App = ({
  navigation
}) => {
  const route = useRoute();
  const DATA = route.params?.DATA;
  const mockData = [{
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490
  }, {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590
  }, {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350
  }, {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480
  }, {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460
  }, {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380
  }];
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ImageBackground style={styles.headerImage} source={{
        uri: "https://assets-global.website-files.com/5b5cd6b75bb9b0dce50e212f/5cc08480f9312f082b3bc204_brand-line.png"
      }} resizeMode="contain"></ImageBackground>
        <Text style={styles.headerText}>
          {"Commercial Real Estate Management\n        "}
        </Text>
        <Pressable style={styles.headerButton} onPress={() => {
        navigation.navigate("ScreenAI2", {
          DATA: DATA
        });
      }}>
          <View style={[styles.button]}>
            <Text style={styles.buttonText}>Home</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.content}>
        <View style={styles.column}>
          <LineChart width={400} height={250} data={mockData} margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
          <Text style={styles.text}>Column 1</Text>
        </View>
        <View style={styles.column}>
          <BarChart width={500} height={300} data={mockData} margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
          </BarChart>
        </View>
        <View style={styles.column}>
          <BarChart width={400} height={250} data={mockData} margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
            <Bar dataKey="uv" fill="#ffc658" />
          </BarChart>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.column}>
          <AreaChart width={400} height={250} data={mockData} margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 50
        }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        </View>
        <View style={styles.column}>
          <ComposedChart width={400} height={250} data={mockData} margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            <Scatter dataKey="cnt" fill="red" />
          </ComposedChart>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2023 Crowdbotics Real Estate App
        </Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ea5f57",
    borderRadius: 50
  },
  buttonText: {
    color: "#fff"
  },
  column: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    flexDirection: "row",
    padding: 30,
    width: "100%",
    height: "100%"
  },
  image: {
    width: 100,
    height: 100
  },
  text: {
    marginTop: 10
  },
  footer: {
    height: 60,
    backgroundColor: "#150B48",
    justifyContent: "center",
    paddingLeft: 30
  },
  footerText: {
    color: "#FFFFFF",
    fontSize: 16
  },
  header: {
    height: 60,
    backgroundColor: "#150B48",
    paddingLeft: 30,
    flexDirection: "row",
    alignItems: "center"
  },
  headerButton: {
    position: "absolute",
    right: 30
  },
  headerImage: {
    width: 129,
    height: 18
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 15,
    width: 270,
    height: 27,
    paddingLeft: 10,
    paddingTop: 4,
    textAlign: "center"
  }
});
export default App;