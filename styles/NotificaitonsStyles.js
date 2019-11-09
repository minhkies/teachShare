import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // height: '100%',
    },
    title: {
      fontSize: 29,
      fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 8,
        paddingTop: 2,
    },
    bodyletter: {
        fontSize: 12,
    },
    img: {
        width: 25, 
        height: 25,
        marginRight: 10,
        marginLeft: 10,
    },
    header: {
        marginTop: 35,
        marginLeft: 15,
        width: '100%',
    },
    notiList: {
        width: '90%',
        marginTop: 25,
        marginBottom: 15,
        marginRight: 14,
        marginLeft: 14,
    },
    notiListItem: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 3,
        marginBottom: 3,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 5,
        
    },

  });


export default styles;