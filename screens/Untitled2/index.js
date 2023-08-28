import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native";

const App = () => {
  const navigation = useNavigation();
  const DATA = [{
    property_id: 1,
    property_name: "Office Space Plaza",
    region: "West",
    address: {
      address_1: "789 Business Ave",
      address_2: "",
      city: "Metropolis",
      state: "CA",
      zip: "12345"
    },
    rent: 5000,
    amenities: ["Conference rooms", "High-speed internet", "Parking", "Security services"],
    move_out_date: "2023-12-31",
    lease_term_months: 18,
    image_url: "./yibei-geng--UdYbiywGeg-unsplash.jpg"
  }, {
    property_id: 2,
    property_name: "Retail Center",
    region: "East",
    address: {
      address_1: "123 Shopping St",
      address_2: "",
      city: "City Center",
      state: "NY",
      zip: "54321"
    },
    rent: 3500,
    amenities: ["Large storefront", "Storage space", "ADA compliant", "Prime location"],
    move_out_date: "2023-11-15",
    lease_term_months: 36,
    image_url: "./alesia-kazantceva-VWcPlbHglYc-unsplash.jpg"
  }, {
    property_id: 3,
    property_name: "Industrial Complex",
    region: "Central",
    address: {
      address_1: "456 Industrial Rd",
      address_2: "",
      city: "Industrial Park",
      state: "TX",
      zip: "67890"
    },
    rent: 8000,
    amenities: ["Loading docks", "High ceilings", "Heavy equipment access", "Security fencing"],
    move_out_date: "2024-02-28",
    lease_term_months: 24,
    image_url: "./ant-rozetsky-HXOllTSwrpM-unsplash.jpg"
  }, {
    property_id: 5,
    property_name: "Downtown Retail Space",
    region: "West",
    address: {
      address_1: "789 Market St",
      address_2: "",
      city: "Metropolis",
      state: "CA",
      zip: "12345"
    },
    rent: 4000,
    amenities: ["Large storefront", "High foot traffic", "Parking available", "Prime location"],
    move_out_date: "2023-11-30",
    lease_term_months: 12,
    image_url: "./benjamin-child-GWe0dlVD9e0-unsplash.jpg"
  }, {
    property_id: 6,
    property_name: "Business Park Offices",
    region: "East",
    address: {
      address_1: "456 Enterprise Blvd",
      address_2: "Suite 300",
      city: "Businessville",
      state: "NY",
      zip: "54321"
    },
    rent: 5500,
    amenities: ["Professional atmosphere", "Flexible layouts", "Parking", "Security services"],
    move_out_date: "2024-02-15",
    lease_term_months: 24,
    image_url: "./cowomen-1hlFqUdFv1s-unsplash.jpg"
  }, {
    property_id: 7,
    property_name: "Industrial Warehouse",
    region: "Central",
    address: {
      address_1: "123 Manufacturing Way",
      address_2: "",
      city: "Factoryville",
      state: "TX",
      zip: "67890"
    },
    rent: 7000,
    amenities: ["Large storage space", "Loading docks", "Industrial equipment access", "Security measures"],
    move_out_date: "2023-10-31",
    lease_term_months: 36,
    image_url: "./david-fintz-z-Jaxjj0KVY-unsplash.jpg"
  }, {
    property_id: 8,
    property_name: "Urban Loft Office",
    region: "West",
    address: {
      address_1: "567 Loft Blvd",
      address_2: "Floor 5",
      city: "Cityscape",
      state: "CA",
      zip: "54321"
    },
    rent: 3200,
    amenities: ["Open concept", "Natural light", "City views", "Rooftop terrace"],
    move_out_date: "2024-01-31",
    lease_term_months: 18,
    image_url: "./erin-doering-kFoh7gacj_0-unsplash.jpg"
  }, {
    property_id: 9,
    property_name: "Medical Office Suite",
    region: "Central",
    address: {
      address_1: "789 Health Ave",
      address_2: "Suite 101",
      city: "Medtown",
      state: "IL",
      zip: "23456"
    },
    rent: 4500,
    amenities: ["Medical facilities nearby", "Reception area", "Private rooms", "ADA compliant"],
    move_out_date: "2024-03-15",
    lease_term_months: 24,
    image_url: "./israel-andrade-YI_9SivVt_s-unsplash.jpg"
  }, {
    property_id: 10,
    property_name: "Tech Campus Offices",
    region: "West",
    address: {
      address_1: "123 Innovation Dr",
      address_2: "",
      city: "Techville",
      state: "CA",
      zip: "78901"
    },
    rent: 6000,
    amenities: ["Collaborative workspaces", "Innovation labs", "Fitness center", "Cafeteria"],
    move_out_date: "2023-11-30",
    lease_term_months: 36,
    image_url: "./jason-leung-tshDiJpuHW8-unsplash.jpg"
  }, {
    property_id: 11,
    property_name: "Business Tower",
    region: "East",
    address: {
      address_1: "789 Executive Ave",
      address_2: "",
      city: "Corporate City",
      state: "NY",
      zip: "12345"
    },
    rent: 7500,
    amenities: ["Executive suites", "Panoramic views", "Meeting rooms", "Concierge services"],
    move_out_date: "2023-12-31",
    lease_term_months: 24,
    image_url: "./jose-losada-DyFjxmHt3Es-unsplash.jpg"
  }, {
    property_id: 12,
    property_name: "Artistic Studio Space",
    region: "West",
    address: {
      address_1: "123 Creative St",
      address_2: "Studio 5",
      city: "Artville",
      state: "CA",
      zip: "54321"
    },
    rent: 2800,
    amenities: ["Inspiring environment", "Spacious studios", "Natural light", "Gallery space"],
    move_out_date: "2023-11-15",
    lease_term_months: 18,
    image_url: "./kaleb-tapp-1deQbU6DhBg-unsplash.jpg"
  }, {
    property_id: 13,
    property_name: "Warehouse Distribution Center",
    region: "Central",
    address: {
      address_1: "456 Logistics Rd",
      address_2: "",
      city: "Distribution City",
      state: "TX",
      zip: "67890"
    },
    rent: 9000,
    amenities: ["Bulk storage", "Loading docks", "Distribution services", "Security measures"],
    move_out_date: "2024-02-28",
    lease_term_months: 36,
    image_url: "./lycs-architecture-aKij95Mmus8-unsplash.jpg"
  }, {
    property_id: 14,
    property_name: "Luxury Office Suites",
    region: "West",
    address: {
      address_1: "789 Prestige Ave",
      address_2: "",
      city: "Eleganceville",
      state: "CA",
      zip: "54321"
    },
    rent: 4800,
    amenities: ["High-end finishes", "Private offices", "Lounge area", "Conference facilities"],
    move_out_date: "2024-01-31",
    lease_term_months: 24,
    image_url: "./mikhail-derecha-q-XTB-YTsho-unsplash.jpg"
  }, {
    property_id: 15,
    property_name: "Gourmet Retail Space",
    region: "Central",
    address: {
      address_1: "123 Culinary St",
      address_2: "",
      city: "Foodville",
      state: "IL",
      zip: "23456"
    },
    rent: 4200,
    amenities: ["Commercial kitchen", "Tasting area", "High visibility", "Specialty food displays"],
    move_out_date: "2024-03-15",
    lease_term_months: 18,
    image_url: "./nastuh-abootalebi-ZtC4_rPCRXA-unsplash.jpg"
  }, {
    property_id: 16,
    property_name: "Innovation Lab Complex",
    region: "West",
    address: {
      address_1: "789 Innovate Dr",
      address_2: "",
      city: "Innovativetown",
      state: "CA",
      zip: "78901"
    },
    rent: 6800,
    amenities: ["Research facilities", "Collaborative spaces", "Cutting-edge equipment", "Cafeteria"],
    move_out_date: "2023-11-30",
    lease_term_months: 36,
    image_url: "./nastuh-abootalebi-rSpMla5RItA-unsplash.jpg"
  }, {
    property_id: 17,
    property_name: "Financial District Offices",
    region: "East",
    address: {
      address_1: "123 Wall St",
      address_2: "Floor 20",
      city: "Financeville",
      state: "NY",
      zip: "12345"
    },
    rent: 5500,
    amenities: ["Professional atmosphere", "City skyline views", "Meeting rooms", "Security services"],
    move_out_date: "2023-12-31",
    lease_term_months: 24,
    image_url: "./nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg"
  }, {
    property_id: 18,
    property_name: "Music Studio Complex",
    region: "West",
    address: {
      address_1: "456 Melody Ave",
      address_2: "",
      city: "Musicville",
      state: "CA",
      zip: "54321"
    },
    rent: 3200,
    amenities: ["Soundproof studios", "Recording equipment", "Rehearsal spaces", "Inspiring environment"],
    move_out_date: "2023-11-15",
    lease_term_months: 18,
    image_url: "./redd-f-5U_28ojjgms-unsplash.jpg"
  }, {
    property_id: 19,
    property_name: "Logistics Warehouse",
    region: "Central",
    address: {
      address_1: "789 Cargo Rd",
      address_2: "",
      city: "Logistics City",
      state: "TX",
      zip: "67890"
    },
    rent: 7000,
    amenities: ["Bulk storage", "Loading docks", "Distribution services", "Security measures"],
    move_out_date: "2024-02-28",
    lease_term_months: 36,
    image_url: "./rudy-dong-z0szOYpWmk8-unsplash.jpg"
  }, {
    property_id: 20,
    property_name: "Skyline Offices",
    region: "West",
    address: {
      address_1: "123 Horizon Ave",
      address_2: "Suite 1500",
      city: "Horizontown",
      state: "CA",
      zip: "54321"
    },
    rent: 4700,
    amenities: ["Panoramic city views", "Modern design", "Meeting rooms", "Rooftop terrace"],
    move_out_date: "2024-01-31",
    lease_term_months: 24,
    image_url: "./sean-pollock-PhYq704ffdA-unsplash.jpg"
  }, {
    property_id: 21,
    property_name: "Fashion Retail Space",
    region: "Central",
    address: {
      address_1: "789 Style St",
      address_2: "",
      city: "Fashionville",
      state: "IL",
      zip: "23456"
    },
    rent: 3800,
    amenities: ["Large display windows", "High foot traffic", "Stylish interiors", "Prime location"],
    move_out_date: "2024-03-15",
    lease_term_months: 18,
    image_url: "./slidebean-TpGIpUF67po-unsplash.jpg"
  }, {
    property_id: 22,
    property_name: "Green Tech Campus",
    region: "West",
    address: {
      address_1: "123 Eco Blvd",
      address_2: "",
      city: "Greenville",
      state: "CA",
      zip: "78901"
    },
    rent: 6500,
    amenities: ["Sustainable design", "Green spaces", "Research facilities", "Cafeteria"],
    move_out_date: "2023-11-30",
    lease_term_months: 36,
    image_url: "./swapnil-potdar-WaAa14Wvpgg-unsplash.jpg"
  }];
  const initialState = DATA[0];
  const [property, setProperty] = useState(initialState);
  const [selectedId, setSelectedId] = useState(DATA[0].property_id);
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ImageBackground style={styles.headerImage} source={{
        uri: "https://assets-global.website-files.com/5b5cd6b75bb9b0dce50e212f/5cc08480f9312f082b3bc204_brand-line.png"
      }} resizeMode="contain"></ImageBackground>
        <Text style={styles.headerText}>Commercial Real Estate Management</Text>
        <Pressable style={styles.headerButton} onPress={() => {
        navigation.navigate("Untitled3", {
          DATA: DATA
        });
      }}>
          <View style={[styles.button]}>
            <Text style={styles.buttonText}>Admin</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.content}>
        <View style={styles.column}>
          <View style={styles.itemHeader}>
            <Text style={styles.propertyName}>Property Name</Text>
            <Text style={styles.leaseTerm}>Term </Text>
            <Text style={styles.leaseEnd}>Lease End</Text>

            <Text style={styles.headSmall}>Rent</Text>
          </View>
          <View style={styles.separator} />

          <FlatList renderItem={({
          item
        }) => {
          const backgroundColor = item.property_id === selectedId ? "#EDEDED" : "#fff";
          return <Pressable onPress={() => {
            setProperty(item);
            setSelectedId(item.property_id);
          }}>
                  <View style={[styles.item, {
              backgroundColor: backgroundColor
            }]}>
                    <Text style={styles.boxLarge}>{item?.property_name}</Text>
                    <Text style={styles.boxSmall}>
                      {item?.lease_term_months}
                    </Text>
                    <Text style={styles.boxMedium}>{item?.move_out_date}</Text>

                    <Text style={styles.boxMedium}>
                      {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD"
                }).format(item?.rent)}
                    </Text>
                    <ImageBackground style={styles.MaFIlBFZ} source={require("./navigate_next_FILL0_wght400_GRAD0_opsz48.png")} resizeMode="contain"></ImageBackground>
                  </View>
                </Pressable>;
        }} ItemSeparatorComponent={() => <View style={styles.separator} />} data={DATA} keyExtractor={item => item.property_id}></FlatList>
        </View>
        <View style={styles.column}>
          <View style={styles.flexRowStyled}>
            <View style={styles.detailCol1}>
              <Text style={styles.field}>Property</Text>
              <Text style={styles.value}>{property?.property_name}</Text>

              <Text style={styles.field}>Total Lease Term Revenue</Text>
              <Text style={styles.value}>
                {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
              }).format(property?.rent * property?.lease_term_months)}
              </Text>
              {new Date(property.move_out_date).getMonth() - new Date().getMonth() < 3 ? <Text style={[styles.field, styles.PsAaUrsp]}>
                  {"Lease Ends < 3 Months"}
                </Text> : null}

              <Text style={styles.field}>Monthly Rent</Text>

              <Text style={styles.value}>
                {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
              }).format(property?.rent)}
              </Text>
              <Text style={styles.field}>Address</Text>
              <Text>{property.address.address_1}</Text>

              {property.address.address_2 ? <Text>{property?.address.address_2}</Text> : null}
              <View style={styles.flexRow}>
                <Text>
                  {property.address.city}, {property?.address.state}
                </Text>
              </View>
              <Text>{property?.address.zip}</Text>
              <Text style={styles.field}>Lease Term</Text>
              <Text style={styles.value}>{property?.lease_term_months}</Text>
              <Text style={styles.field}>Lease End</Text>
              <Text style={styles.value}>{property?.move_out_date}</Text>
            </View>
            <View style={styles.detailCol2}>
              <ImageBackground style={styles.buildingImage} source={require(`${property?.image_url}`)} resizeMode="contain"></ImageBackground>
            </View>
          </View>
          <View style={styles.flexRowStyled}>
            <View style={styles.detailCol2}>
              <Text style={styles.field}>Amenities</Text>

              <Text>{property?.amenities[0]}</Text>
              <Text>{property?.amenities[1]}</Text>
              <Text>{property?.amenities[2]}</Text>
              <Text>{property?.amenities[3]}</Text>
            </View>
            <View style={styles.detailCol1}>
              <Text style={styles.field}>Region</Text>

              <Text style={styles.value}>{property?.region}</Text>
            </View>
          </View>
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
  // headers
  boxLarge: {
    width: "35%"
  },
  boxMedium: {
    width: "25%"
  },
  boxSmall: {
    width: "10%"
  },
  leaseTerm: {
    fontWeight: "bold",
    fontSize: 12,
    width: "10%"
  },
  leaseEnd: {
    fontWeight: "bold",
    fontSize: 12,
    width: "25%"
  },
  propertyName: {
    fontWeight: "bold",
    fontSize: 12,
    width: "35%"
  },
  headSmall: {
    fontWeight: "bold",
    fontSize: 12,
    width: "10%"
  },
  //
  buildingImage: {
    flex: 1,
    minWidth: 100,
    marginRight: 15
  },
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
    marginLeft: 20,
    width: "100%",
    minHeight: 500
  },
  content: {
    flex: 1,
    flexDirection: "row",
    padding: 30,
    width: "100%",
    minHeight: 500
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  detailCol1: {
    flex: 1,
    paddingLeft: 15
  },
  detailCol2: {
    flex: 1.5,
    paddingLeft: 15
  },
  field: {
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10
  },
  flexRow: {
    flexDirection: "row"
  },
  flexRowStyled: {
    backgroundColor: "#EDEDED",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingBottom: 15
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
  headerImage: {
    width: 129,
    height: 18
  },
  headerButton: {
    position: "absolute",
    right: 30
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 15,
    width: 270,
    height: 27,
    paddingLeft: 10,
    paddingTop: 4,
    textAlign: "center"
  },
  itemHeader: {
    flexDirection: "row",
    paddingBottom: 5
  },
  item: {
    flexDirection: "row",
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  separator: {
    backgroundColor: "#B2BEB5",
    height: 1
  },
  value: {
    marginBottom: 5
  },
  MaFIlBFZ: {
    width: 20,
    height: 20
  },
  PsAaUrsp: {
    color: "#ff0000"
  }
});
export default App;