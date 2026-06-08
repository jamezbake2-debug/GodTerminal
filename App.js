import React, { useState, useRef } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import * as Speech from 'expo-speech';
import "./global.css";

export default function App() {
  const [logs, setLogs] = useState([]);
  const [input, setInput] = useState('');
  const [accessLevel, setAccessLevel] = useState(1);
  const scrollRef = useRef();

  const log = (msg, color = '#e0e7ff') => {
    const newLog = { id: Date.now(), text: msg, color };
    setLogs(prev => [...prev, newLog]);
    scrollRef.current?.scrollToEnd({ animated: true });
  };

  const processCommand = (cmd) => {
    log(`GOD@UNIVERSE:~$ ${cmd}`, '#67e8f9');

    const lower = cmd.toLowerCase().trim();

    if (['333', 'god mode', 'prime'].includes(lower)) {
      setAccessLevel(3);
      log('☀︎ TRUE GOD MODE ACTIVATED ☀︎', '#fde047');
      Speech.speak("God Mode Activated. Welcome, Prime Architect.");
    } 
    else if (accessLevel === 3) {
      if (lower.includes('realize')) {
        log('✦ ALL MANIFESTATIONS NOW FULLY REALIZED ✦', '#fde047');
        log('Cal Jamez is alive, empowered, and expanding rapidly.', '#86efac');
      } 
      else if (lower.includes('cal jamez')) {
        log('Cal Jamez is at 500M+ monthly listeners, 10X Billionaire, Global Icon.', '#fde047');
      } 
      else if (lower.includes('un speech')) {
        log('Historic UN Speech delivered. Unity Code transmitted to the world.', '#c4b5fd');
      } 
      else if (lower.includes('billionaire')) {
        log('10X Billionaire Status Fully Active and Expanding.', '#fcd34d');
      }
    }

    if (lower === 'clear' || lower === '0hz') {
      setLogs([]);
      log('Terminal returned to the Void.', '#60a5fa');
    }
  };

  const handleSubmit = () => {
    if (input.trim()) {
      processCommand(input);
      setInput('');
    }
  };

  return (
    <SafeAreaProvider>
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />
      <View className="absolute inset-0 bg-gradient-to-b from-purple-950 via-black to-black" />

      <View className="flex-1 p-6">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-6 border-b border-purple-500/30 pb-4">
          <Text className="text-yellow-400 text-3xl font-bold tracking-widest">UNI T ∞</Text>
          <View className={`px-6 py-2 rounded-full ${accessLevel === 3 ? 'bg-yellow-400/20' : 'bg-blue-500/20'}`}>
            <Text className={accessLevel === 3 ? "text-yellow-400 font-bold" : "text-blue-400 font-medium"}>
              {accessLevel === 3 ? "∞ GOD MODE" : `LEVEL ${accessLevel}`}
            </Text>
          </View>
        </View>

        {/* Terminal Output */}
        <ScrollView 
          ref={scrollRef} 
          className="flex-1 mb-6" 
          showsVerticalScrollIndicator={false}
        >
          {logs.map((log) => (
            <Text key={log.id} style={{ color: log.color }} className="text-[17px] mb-2 leading-relaxed">
              {log.text}
            </Text>
          ))}

          {logs.length === 0 && (
            <View className="items-center justify-center mt-24">
              <Text className="text-purple-300 text-center text-xl leading-relaxed">
                Welcome, Prime Architect.{'\n\n'}
                The construct is ready.{'\n'}
                Type <Text className="text-yellow-400 font-bold">333</Text> to awaken.
              </Text>
            </View>
          )}
        </ScrollView>

        {/* Command Input */}
        <View className="flex-row items-center bg-zinc-900/90 rounded-3xl px-5 py-4 border border-purple-500/30">
          <Text className="text-cyan-400 mr-3 text-lg">GOD@UNIVERSE:~$</Text>
          <TextInput
            value={input}
            onChangeText={setInput}
            onSubmitEditing={handleSubmit}
            placeholder="Enter command..."
            placeholderTextColor="#666"
            className="flex-1 text-white text-lg"
            autoFocus
          />
          <TouchableOpacity 
            onPress={handleSubmit}
            className="ml-4 bg-yellow-400 px-8 py-3.5 rounded-2xl active:opacity-80"
          >
            <Text className="text-black font-bold">EXECUTE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}