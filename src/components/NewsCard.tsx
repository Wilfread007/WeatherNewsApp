// src/components/NewsCard.tsx

import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const NewsCard = ({ article }: { article: any }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{article.title}</Text>
      {article.description && <Text style={styles.description}>{article.description}</Text>}
      <TouchableOpacity onPress={() => Linking.openURL(article.url)}>
        <Text style={styles.link}>Read more →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f3f4f6',
    padding: 14,
    borderRadius: 8,
    marginVertical: 8
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 6
  },
  description: {
    fontSize: 15,
    marginBottom: 6
  },
  link: {
    fontSize: 15,
    color: '#1e88e5'
  }
});

export default NewsCard;
