var searchIndex = JSON.parse('{\
"pravega_client":{"doc":"A Rust client for Pravega.","i":[[0,"byte","pravega_client","The Byte API for writing and reading data to a segment in …",null,null],[0,"writer","pravega_client::byte","",null,null],[3,"ByteWriter","pravega_client::byte::writer","Allow for writing raw bytes directly to a segment.",null,null],[11,"seal","","Seal the segment and no further writes are allowed.",0,[[]]],[11,"truncate_data_before","","Truncate data before a given offset for the segment. No …",0,[[["i64",15]]]],[11,"current_write_offset","","Track the current write position for this writer.",0,[[],["i64",15]]],[11,"seek_to_tail","","Seek to the tail of the segment.",0,[[]]],[0,"reader","pravega_client::byte","",null,null],[3,"ByteReader","pravega_client::byte::reader","A ByteReader enables reading raw bytes from a segment.",null,null],[11,"current_head","","Return the head of current readable data in the segment.",1,[[],[["result",6],["u64",15]]]],[11,"current_offset","","Return the current read offset.",1,[[],["i64",15]]],[11,"available","","Return the bytes that are available to read instantly …",1,[[],["usize",15]]],[3,"ByteWriter","pravega_client::byte","Allow for writing raw bytes directly to a segment.",null,null],[3,"ByteReader","","A ByteReader enables reading raw bytes from a segment.",null,null],[0,"client_factory","pravega_client","Factory to create components in Pravega Rust client.",null,null],[3,"ClientFactory","pravega_client::client_factory","Applications should use ClientFactory to create resources …",null,null],[11,"new","","Create a new ClientFactory.",2,[[["clientconfig",3]],["clientfactory",3]]],[11,"runtime","","",2,[[],["runtime",3]]],[11,"config","","",2,[[],["clientconfig",3]]],[11,"controller_client","","",2,[[],["controllerclient",8]]],[11,"create_event_writer","","",2,[[["scopedstream",3]],["eventwriter",3]]],[11,"create_reader_group","","",2,[[["string",3],["scopedstream",3],["scope",3]]]],[11,"create_transactional_event_writer","","",2,[[["writerid",3],["scopedstream",3]]]],[11,"create_byte_writer","","",2,[[["scopedsegment",3]],["bytewriter",3]]],[11,"create_byte_reader","","",2,[[["scopedsegment",3]],["bytereader",3]]],[11,"create_table","","",2,[[["string",3],["scope",3]]]],[11,"create_synchronizer","","",2,[[["string",3],["scope",3]]]],[0,"event","pravega_client","The Event API for writing and reading data.",null,null],[0,"reader","pravega_client::event","",null,null],[3,"EventReader","pravega_client::event::reader","Read events from Stream.",null,null],[11,"release_segment","","Release a partially read segment slice back to event …",3,[[["segmentslice",3]]]],[11,"release_segment_at","","Release a segment back to the reader and also indicate …",3,[[["i64",15],["segmentslice",3]]]],[11,"reader_offline","","Mark the reader as offline. This will ensure the segments …",3,[[]]],[11,"acquire_segment","","This function returns a SegmentSlice from the data …",3,[[]]],[3,"Event","","This represents an event that was read from a Pravega …",null,null],[12,"offset_in_segment","","",4,null],[12,"value","","",4,null],[3,"SegmentSlice","","This represents a segment slice which can be used to read …",null,null],[12,"meta","","",5,null],[11,"is_empty","","",5,[[],["bool",15]]],[3,"SliceMetadata","","",null,null],[12,"start_offset","","",6,null],[12,"scoped_segment","","",6,null],[12,"last_event_offset","","",6,null],[12,"read_offset","","",6,null],[12,"end_offset","","",6,null],[12,"partial_data_present","","",6,null],[11,"has_events","","Method to verify if the Segment has pending events that …",6,[[],["bool",15]]],[0,"reader_group","pravega_client::event","",null,null],[3,"ReaderGroup","pravega_client::event::reader_group","A collection of readers that collectively read all the …",null,null],[12,"name","","",7,null],[12,"state","","",7,null],[11,"create_reader","","Create a new EventReader under the ReaderGroup. This …",7,[[["string",3]]]],[3,"ReaderGroupConfig","","",null,null],[11,"new","","Create a new ReaderGroupConfig by specifying the group …",8,[[["u64",15]]]],[11,"to_bytes","","Method to serialize the ReaderGroupConfig into bytes.",8,[[],[["serdeerror",4],["result",4],["vec",3]]]],[11,"from_bytes","","Method to de-serialize the ReaderGroupConfig object from …",8,[[],[["serdeerror",4],["result",4]]]],[11,"get_streams","","Method to obtain the streams in a ReaderGroupConfig.",8,[[],[["vec",3],["scopedstream",3]]]],[3,"ReaderGroupConfigBuilder","","",null,null],[11,"set_group_refresh_time","","Set reader group refresh time.",9,[[["u64",15]]]],[11,"add_stream","","Add a Pravega Stream to the reader group.",9,[[["scopedstream",3]]]],[11,"build","","Build a ReaderGroupConfig object. This method panics for …",9,[[],["readergroupconfig",3]]],[4,"SerdeError","","",null,null],[13,"Cbor","","",10,null],[12,"msg","pravega_client::event::reader_group::SerdeError","",11,null],[12,"source","","",11,null],[0,"transactional_writer","pravega_client::event","",null,null],[3,"TransactionalEventWriter","pravega_client::event::transactional_writer","Write events to a stream transactionally.",null,null],[11,"begin","","This method opens a transaction by sending a request to …",12,[[]]],[11,"get_txn","","This method returns the Transaction based on the given …",12,[[["txid",3]]]],[3,"Transaction","","Pravega Transaction support.",null,null],[11,"txn_id","","get the transaction id.",13,[[],["txid",3]]],[11,"stream","","get the stream that this transaction is based on.",13,[[],["scopedstream",3]]],[11,"write_event","","write_event accepts a vec of bytes as the input event and …",13,[[["vec",3],["option",4],["u8",15],["string",3]]]],[11,"commit","","commit accepts a timestamp and will send a commit request …",13,[[["timestamp",3]]]],[11,"abort","","abort will send abort request to Pravega controller.",13,[[]]],[11,"check_status","","check the current Transaction status by sending request …",13,[[]]],[4,"TransactionalEventWriterError","","",null,null],[13,"PingerError","","",14,null],[12,"msg","pravega_client::event::transactional_writer::TransactionalEventWriterError","",15,null],[13,"TxnStreamControllerError","pravega_client::event::transactional_writer","",14,null],[12,"source","pravega_client::event::transactional_writer::TransactionalEventWriterError","",16,null],[4,"TransactionError","pravega_client::event::transactional_writer","",null,null],[13,"TxnSegmentWriterError","","",17,null],[12,"error_msg","pravega_client::event::transactional_writer::TransactionError","",18,null],[13,"TxnStreamWriterError","pravega_client::event::transactional_writer","",17,null],[12,"source","pravega_client::event::transactional_writer::TransactionError","",19,null],[13,"TxnClosed","pravega_client::event::transactional_writer","",17,null],[12,"id","pravega_client::event::transactional_writer::TransactionError","",20,null],[13,"TxnControllerError","pravega_client::event::transactional_writer","",17,null],[12,"source","pravega_client::event::transactional_writer::TransactionError","",21,null],[13,"TxnCommitError","pravega_client::event::transactional_writer","",17,null],[12,"id","pravega_client::event::transactional_writer::TransactionError","",22,null],[12,"status","","",22,null],[13,"TxnAbortError","pravega_client::event::transactional_writer","",17,null],[12,"id","pravega_client::event::transactional_writer::TransactionError","",23,null],[12,"status","","",23,null],[0,"writer","pravega_client::event","",null,null],[3,"EventWriter","pravega_client::event::writer","Write events exactly once to a given stream.",null,null],[11,"write_event","","Write an event without routing key.",24,[[["vec",3],["u8",15]]]],[11,"write_event_by_routing_key","","Writes an event with a routing key.",24,[[["u8",15],["vec",3],["string",3]]]],[3,"EventReader","pravega_client::event","Read events from Stream.",null,null],[3,"ReaderGroup","","A collection of readers that collectively read all the …",null,null],[12,"name","","",7,null],[12,"state","","",7,null],[3,"Transaction","","Pravega Transaction support.",null,null],[3,"TransactionalEventWriter","","Write events to a stream transactionally.",null,null],[3,"EventWriter","","Write events exactly once to a given stream.",null,null],[0,"sync","pravega_client","Pravega synchronization primitives.",null,null],[0,"synchronizer","pravega_client::sync","",null,null],[4,"SynchronizerError","pravega_client::sync::synchronizer","",null,null],[13,"SyncTableError","","",25,null],[12,"operation","pravega_client::sync::synchronizer::SynchronizerError","",26,null],[12,"source","","",26,null],[13,"SyncUpdateError","pravega_client::sync::synchronizer","",25,null],[12,"error_msg","pravega_client::sync::synchronizer::SynchronizerError","",27,null],[13,"SyncTombstoneError","pravega_client::sync::synchronizer","",25,null],[12,"error_msg","pravega_client::sync::synchronizer::SynchronizerError","",28,null],[3,"Synchronizer","pravega_client::sync::synchronizer","Provide a map that is synchronized across different …",null,null],[11,"new","","",29,[[["string",3],["clientfactory",3],["scope",3]]]],[11,"get_outer_map","","Get the outer map currently held in memory. The return …",29,[[],[["string",3],["hashmap",3],["hashmap",3]]]],[11,"get_inner_map","","Get the inner map currently held in memory. The return …",29,[[["str",15]],[["string",3],["value",3],["hashmap",3]]]],[11,"get_name","","Get the name of the Synchronizer.",29,[[],["string",3]]],[11,"get","","Get the Value associated with the map. The data in Value …",29,[[["str",15]],[["value",3],["option",4]]]],[11,"get_key_version","","Get the Key version of the given key,",29,[[["option",4],["str",15]],["version",6]]],[11,"fetch_updates","","Fetch the latest map from remote server and apply it to …",29,[[]]],[11,"insert","","Insert/Update a list of keys and applies it atomically to …",29,[[]]],[11,"remove","","Remove a list of keys and apply it atomically to local …",29,[[]]],[3,"Key","","The Key struct in the in memory map. It contains two …",null,null],[12,"key","","",30,null],[12,"key_version","","",30,null],[3,"Value","","The Value struct in the in memory map. It contains two …",null,null],[12,"type_id","","",31,null],[12,"data","","",31,null],[3,"Update","","The Update contains a nested map and a version map, which …",null,null],[11,"new","","",32,[[["value",3],["vec",3],["hashmap",3],["string",3],["hashmap",3],["vec",3],["remove",3],["insert",3]]]],[11,"insert","","insert method needs an outer_key and an inner_key to find …",32,[[["valuedata",8],["box",3],["string",3]]]],[11,"insert_tombstone","","insert_tombstone method replaces the original value with …",32,[[["string",3]],[["synchronizererror",4],["result",4]]]],[11,"retain","","retain a specific map to make sure it\'s not altered by …",32,[[["string",3]]]],[11,"get","","get method will take an outer_key and an inner_key and …",32,[[["str",15]],[["value",3],["option",4]]]],[11,"get_inner_map","","get_inner_map method will take an outer_key return the …",32,[[["str",15]],[["string",3],["value",3],["hashmap",3]]]],[11,"contains_key","","Check if an inner key exists. The tombstoned value will …",32,[[["str",15]],["bool",15]]],[11,"contains_outer_key","","Check if an outer_key exists. The tombstoned value will …",32,[[["str",15]],["bool",15]]],[11,"is_empty","","",32,[[],["bool",15]]],[3,"Insert","","Insert struct is used internally to update the server …",null,null],[11,"new","","",33,[[["option",4],["string",3]]]],[3,"Remove","","The remove struct is used internally to remove a value …",null,null],[11,"new","","",34,[[["string",3]]]],[8,"ValueData","","The trait bound for the ValueData",null,null],[8,"ValueClone","","Clone trait helper.",null,null],[10,"clone_box","","",35,[[],[["valuedata",8],["box",3]]]],[8,"ValueSerialize","","Serialize trait helper, we need to serialize the …",null,null],[10,"serialize_value","","",36,[[["cborserializer",3]],[["error",3],["result",4]]]],[5,"serialize","","Serialize the  into the Vec by using cbor serializer. …",null,[[["valuedata",8]],[["result",4],["error",3],["vec",3]]]],[5,"deserialize_from","","Deserialize the Value into the type T by using cbor …",null,[[],[["error",3],["result",4]]]],[0,"table","pravega_client::sync","",null,null],[6,"Version","pravega_client::sync::table","",null,null],[4,"TableError","","",null,null],[13,"ConnectionError","","",37,null],[12,"can_retry","pravega_client::sync::table::TableError","",38,null],[12,"operation","","",38,null],[12,"source","","",38,null],[13,"KeyDoesNotExist","pravega_client::sync::table","",37,null],[12,"operation","pravega_client::sync::table::TableError","",39,null],[12,"error_msg","","",39,null],[13,"IncorrectKeyVersion","pravega_client::sync::table","",37,null],[12,"operation","pravega_client::sync::table::TableError","",40,null],[12,"error_msg","","",40,null],[13,"OperationError","pravega_client::sync::table","",37,null],[12,"operation","pravega_client::sync::table::TableError","",41,null],[12,"error_msg","","",41,null],[3,"Table","pravega_client::sync::table","Table is the client implementation of Table Segment in …",null,null],[11,"new","","",42,[[["string",3],["clientfactory",3],["scope",3]]]],[11,"get","","Return the latest value corresponding to the key.",42,[[]]],[11,"insert","","Unconditionally insert a new or update an existing entry …",42,[[["i64",15]]]],[11,"insert_conditionally","","Conditionally insert a key-value pair into the table map. …",42,[[["i64",15],["version",6]]]],[11,"remove","","Unconditionally remove a key from the Table. If the key …",42,[[["i64",15]]]],[11,"remove_conditionally","","Conditionally remove a key from the Table if it matches …",42,[[["i64",15],["version",6]]]],[11,"get_all","","Return the latest values for a given list of keys. If the …",42,[[["vec",3]]]],[11,"insert_all","","Unconditionally insert a new or updates an existing entry …",42,[[["i64",15],["vec",3]]]],[11,"insert_conditionally_all","","Conditionally insert key-value pairs into the table. The …",42,[[["i64",15],["vec",3]]]],[11,"remove_all","","Unconditionally remove the provided keys from the table.",42,[[["i64",15],["vec",3]]]],[11,"remove_conditionally_all","","Conditionally remove keys after checking the key version. …",42,[[["i64",15],["vec",3]]]],[11,"read_keys_stream","","Read keys as an Async Stream. This method deserializes …",42,[[["i32",15]]]],[11,"read_entries_stream","","Read entries as an Async Stream. This method deserialized …",42,[[["i32",15]]]],[11,"read_entries_stream_from_position","","Read entries as an Async Stream from a given position. …",42,[[["i64",15],["i32",15]]]],[3,"Synchronizer","pravega_client::sync","Provide a map that is synchronized across different …",null,null],[3,"Table","","Table is the client implementation of Table Segment in …",null,null],[11,"from","pravega_client::byte","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"into_request","","",0,[[],["request",3]]],[11,"vzip","","",0,[[]]],[11,"init","","",0,[[],["usize",15]]],[11,"deref","","",0,[[["usize",15]]]],[11,"deref_mut","","",0,[[["usize",15]]]],[11,"drop","","",0,[[["usize",15]]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"into_request","","",1,[[],["request",3]]],[11,"vzip","","",1,[[]]],[11,"init","","",1,[[],["usize",15]]],[11,"deref","","",1,[[["usize",15]]]],[11,"deref_mut","","",1,[[["usize",15]]]],[11,"drop","","",1,[[["usize",15]]]],[11,"from","pravega_client::client_factory","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"into_request","","",2,[[],["request",3]]],[11,"vzip","","",2,[[]]],[11,"init","","",2,[[],["usize",15]]],[11,"deref","","",2,[[["usize",15]]]],[11,"deref_mut","","",2,[[["usize",15]]]],[11,"drop","","",2,[[["usize",15]]]],[11,"from","pravega_client::event","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"into_request","","",3,[[],["request",3]]],[11,"vzip","","",3,[[]]],[11,"init","","",3,[[],["usize",15]]],[11,"deref","","",3,[[["usize",15]]]],[11,"deref_mut","","",3,[[["usize",15]]]],[11,"drop","","",3,[[["usize",15]]]],[11,"from","pravega_client::event::reader","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"into_request","","",4,[[],["request",3]]],[11,"vzip","","",4,[[]]],[11,"init","","",4,[[],["usize",15]]],[11,"deref","","",4,[[["usize",15]]]],[11,"deref_mut","","",4,[[["usize",15]]]],[11,"drop","","",4,[[["usize",15]]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"into_iter","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"into_request","","",5,[[],["request",3]]],[11,"vzip","","",5,[[]]],[11,"init","","",5,[[],["usize",15]]],[11,"deref","","",5,[[["usize",15]]]],[11,"deref_mut","","",5,[[["usize",15]]]],[11,"drop","","",5,[[["usize",15]]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"into_request","","",6,[[],["request",3]]],[11,"vzip","","",6,[[]]],[11,"init","","",6,[[],["usize",15]]],[11,"deref","","",6,[[["usize",15]]]],[11,"deref_mut","","",6,[[["usize",15]]]],[11,"drop","","",6,[[["usize",15]]]],[11,"from","pravega_client::event","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"into_request","","",7,[[],["request",3]]],[11,"vzip","","",7,[[]]],[11,"init","","",7,[[],["usize",15]]],[11,"deref","","",7,[[["usize",15]]]],[11,"deref_mut","","",7,[[["usize",15]]]],[11,"drop","","",7,[[["usize",15]]]],[11,"clone_box","pravega_client::event::reader_group","",8,[[],[["box",3],["global",3],["valuedata",8]]]],[11,"serialize_value","","",8,[[["serializer",3]],[["error",3],["result",4]]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"into_request","","",8,[[],["request",3]]],[11,"vzip","","",8,[[]]],[11,"init","","",8,[[],["usize",15]]],[11,"deref","","",8,[[["usize",15]]]],[11,"deref_mut","","",8,[[["usize",15]]]],[11,"drop","","",8,[[["usize",15]]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"into_request","","",9,[[],["request",3]]],[11,"vzip","","",9,[[]]],[11,"init","","",9,[[],["usize",15]]],[11,"deref","","",9,[[["usize",15]]]],[11,"deref_mut","","",9,[[["usize",15]]]],[11,"drop","","",9,[[["usize",15]]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_string","","",10,[[],["string",3]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"as_error_source","","",10,[[],["error",8]]],[11,"into_request","","",10,[[],["request",3]]],[11,"vzip","","",10,[[]]],[11,"init","","",10,[[],["usize",15]]],[11,"deref","","",10,[[["usize",15]]]],[11,"deref_mut","","",10,[[["usize",15]]]],[11,"drop","","",10,[[["usize",15]]]],[11,"from","pravega_client::event","",12,[[]]],[11,"into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"into_request","","",12,[[],["request",3]]],[11,"vzip","","",12,[[]]],[11,"init","","",12,[[],["usize",15]]],[11,"deref","","",12,[[["usize",15]]]],[11,"deref_mut","","",12,[[["usize",15]]]],[11,"drop","","",12,[[["usize",15]]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"into_request","","",13,[[],["request",3]]],[11,"vzip","","",13,[[]]],[11,"init","","",13,[[],["usize",15]]],[11,"deref","","",13,[[["usize",15]]]],[11,"deref_mut","","",13,[[["usize",15]]]],[11,"drop","","",13,[[["usize",15]]]],[11,"from","pravega_client::event::transactional_writer","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_string","","",14,[[],["string",3]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"as_error_source","","",14,[[],["error",8]]],[11,"into_request","","",14,[[],["request",3]]],[11,"vzip","","",14,[[]]],[11,"init","","",14,[[],["usize",15]]],[11,"deref","","",14,[[["usize",15]]]],[11,"deref_mut","","",14,[[["usize",15]]]],[11,"drop","","",14,[[["usize",15]]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"to_string","","",17,[[],["string",3]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"as_error_source","","",17,[[],["error",8]]],[11,"into_request","","",17,[[],["request",3]]],[11,"vzip","","",17,[[]]],[11,"init","","",17,[[],["usize",15]]],[11,"deref","","",17,[[["usize",15]]]],[11,"deref_mut","","",17,[[["usize",15]]]],[11,"drop","","",17,[[["usize",15]]]],[11,"from","pravega_client::event","",24,[[]]],[11,"into","","",24,[[]]],[11,"borrow","","",24,[[]]],[11,"borrow_mut","","",24,[[]]],[11,"try_from","","",24,[[],["result",4]]],[11,"try_into","","",24,[[],["result",4]]],[11,"type_id","","",24,[[],["typeid",3]]],[11,"into_request","","",24,[[],["request",3]]],[11,"vzip","","",24,[[]]],[11,"init","","",24,[[],["usize",15]]],[11,"deref","","",24,[[["usize",15]]]],[11,"deref_mut","","",24,[[["usize",15]]]],[11,"drop","","",24,[[["usize",15]]]],[11,"from","pravega_client::sync::synchronizer","",25,[[]]],[11,"into","","",25,[[]]],[11,"to_string","","",25,[[],["string",3]]],[11,"borrow","","",25,[[]]],[11,"borrow_mut","","",25,[[]]],[11,"try_from","","",25,[[],["result",4]]],[11,"try_into","","",25,[[],["result",4]]],[11,"type_id","","",25,[[],["typeid",3]]],[11,"as_error_source","","",25,[[],["error",8]]],[11,"into_request","","",25,[[],["request",3]]],[11,"vzip","","",25,[[]]],[11,"init","","",25,[[],["usize",15]]],[11,"deref","","",25,[[["usize",15]]]],[11,"deref_mut","","",25,[[["usize",15]]]],[11,"drop","","",25,[[["usize",15]]]],[11,"from","pravega_client::sync","",29,[[]]],[11,"into","","",29,[[]]],[11,"borrow","","",29,[[]]],[11,"borrow_mut","","",29,[[]]],[11,"try_from","","",29,[[],["result",4]]],[11,"try_into","","",29,[[],["result",4]]],[11,"type_id","","",29,[[],["typeid",3]]],[11,"into_request","","",29,[[],["request",3]]],[11,"vzip","","",29,[[]]],[11,"init","","",29,[[],["usize",15]]],[11,"deref","","",29,[[["usize",15]]]],[11,"deref_mut","","",29,[[["usize",15]]]],[11,"drop","","",29,[[["usize",15]]]],[11,"from","pravega_client::sync::synchronizer","",30,[[]]],[11,"into","","",30,[[]]],[11,"to_owned","","",30,[[]]],[11,"clone_into","","",30,[[]]],[11,"borrow","","",30,[[]]],[11,"borrow_mut","","",30,[[]]],[11,"try_from","","",30,[[],["result",4]]],[11,"try_into","","",30,[[],["result",4]]],[11,"type_id","","",30,[[],["typeid",3]]],[11,"equivalent","","",30,[[],["bool",15]]],[11,"into_request","","",30,[[],["request",3]]],[11,"vzip","","",30,[[]]],[11,"get_hash","","",30,[[],["u64",15]]],[11,"init","","",30,[[],["usize",15]]],[11,"deref","","",30,[[["usize",15]]]],[11,"deref_mut","","",30,[[["usize",15]]]],[11,"drop","","",30,[[["usize",15]]]],[11,"clone_box","","",31,[[],[["box",3],["global",3],["valuedata",8]]]],[11,"serialize_value","","",31,[[["serializer",3]],[["error",3],["result",4]]]],[11,"from","","",31,[[]]],[11,"into","","",31,[[]]],[11,"to_owned","","",31,[[]]],[11,"clone_into","","",31,[[]]],[11,"borrow","","",31,[[]]],[11,"borrow_mut","","",31,[[]]],[11,"try_from","","",31,[[],["result",4]]],[11,"try_into","","",31,[[],["result",4]]],[11,"type_id","","",31,[[],["typeid",3]]],[11,"equivalent","","",31,[[],["bool",15]]],[11,"into_request","","",31,[[],["request",3]]],[11,"vzip","","",31,[[]]],[11,"init","","",31,[[],["usize",15]]],[11,"deref","","",31,[[["usize",15]]]],[11,"deref_mut","","",31,[[["usize",15]]]],[11,"drop","","",31,[[["usize",15]]]],[11,"from","","",32,[[]]],[11,"into","","",32,[[]]],[11,"borrow","","",32,[[]]],[11,"borrow_mut","","",32,[[]]],[11,"try_from","","",32,[[],["result",4]]],[11,"try_into","","",32,[[],["result",4]]],[11,"type_id","","",32,[[],["typeid",3]]],[11,"into_request","","",32,[[],["request",3]]],[11,"vzip","","",32,[[]]],[11,"init","","",32,[[],["usize",15]]],[11,"deref","","",32,[[["usize",15]]]],[11,"deref_mut","","",32,[[["usize",15]]]],[11,"drop","","",32,[[["usize",15]]]],[11,"from","","",33,[[]]],[11,"into","","",33,[[]]],[11,"borrow","","",33,[[]]],[11,"borrow_mut","","",33,[[]]],[11,"try_from","","",33,[[],["result",4]]],[11,"try_into","","",33,[[],["result",4]]],[11,"type_id","","",33,[[],["typeid",3]]],[11,"into_request","","",33,[[],["request",3]]],[11,"vzip","","",33,[[]]],[11,"init","","",33,[[],["usize",15]]],[11,"deref","","",33,[[["usize",15]]]],[11,"deref_mut","","",33,[[["usize",15]]]],[11,"drop","","",33,[[["usize",15]]]],[11,"from","","",34,[[]]],[11,"into","","",34,[[]]],[11,"borrow","","",34,[[]]],[11,"borrow_mut","","",34,[[]]],[11,"try_from","","",34,[[],["result",4]]],[11,"try_into","","",34,[[],["result",4]]],[11,"type_id","","",34,[[],["typeid",3]]],[11,"into_request","","",34,[[],["request",3]]],[11,"vzip","","",34,[[]]],[11,"init","","",34,[[],["usize",15]]],[11,"deref","","",34,[[["usize",15]]]],[11,"deref_mut","","",34,[[["usize",15]]]],[11,"drop","","",34,[[["usize",15]]]],[11,"from","pravega_client::sync::table","",37,[[]]],[11,"into","","",37,[[]]],[11,"to_string","","",37,[[],["string",3]]],[11,"borrow","","",37,[[]]],[11,"borrow_mut","","",37,[[]]],[11,"try_from","","",37,[[],["result",4]]],[11,"try_into","","",37,[[],["result",4]]],[11,"type_id","","",37,[[],["typeid",3]]],[11,"as_error_source","","",37,[[],["error",8]]],[11,"into_request","","",37,[[],["request",3]]],[11,"vzip","","",37,[[]]],[11,"init","","",37,[[],["usize",15]]],[11,"deref","","",37,[[["usize",15]]]],[11,"deref_mut","","",37,[[["usize",15]]]],[11,"drop","","",37,[[["usize",15]]]],[11,"from","pravega_client::sync","",42,[[]]],[11,"into","","",42,[[]]],[11,"borrow","","",42,[[]]],[11,"borrow_mut","","",42,[[]]],[11,"try_from","","",42,[[],["result",4]]],[11,"try_into","","",42,[[],["result",4]]],[11,"type_id","","",42,[[],["typeid",3]]],[11,"into_request","","",42,[[],["request",3]]],[11,"vzip","","",42,[[]]],[11,"init","","",42,[[],["usize",15]]],[11,"deref","","",42,[[["usize",15]]]],[11,"deref_mut","","",42,[[["usize",15]]]],[11,"drop","","",42,[[["usize",15]]]],[11,"drop","pravega_client::byte","",0,[[]]],[11,"drop","pravega_client::event::reader","",5,[[]]],[11,"drop","pravega_client::event","",13,[[]]],[11,"drop","","",24,[[]]],[11,"next","pravega_client::event::reader","",5,[[],["option",4]]],[11,"clone","pravega_client::client_factory","",2,[[],["clientfactory",3]]],[11,"clone","pravega_client::event::reader","",6,[[],["slicemetadata",3]]],[11,"clone","pravega_client::event::reader_group","",8,[[],["readergroupconfig",3]]],[11,"clone","pravega_client::sync::synchronizer","",30,[[],["key",3]]],[11,"clone","","",31,[[],["value",3]]],[11,"default","pravega_client::event::reader","",5,[[]]],[11,"default","","",6,[[]]],[11,"default","pravega_client::event::reader_group","",9,[[]]],[11,"eq","","",8,[[["readergroupconfig",3]],["bool",15]]],[11,"ne","","",8,[[["readergroupconfig",3]],["bool",15]]],[11,"eq","pravega_client::sync::synchronizer","",30,[[],["bool",15]]],[11,"eq","","",31,[[["value",3]],["bool",15]]],[11,"ne","","",31,[[["value",3]],["bool",15]]],[11,"fmt","pravega_client::event::reader","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","pravega_client::event::reader_group","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","pravega_client::event::transactional_writer","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",17,[[["formatter",3]],["result",6]]],[11,"fmt","pravega_client::sync::synchronizer","",25,[[["formatter",3]],["result",6]]],[11,"fmt","","",30,[[["formatter",3]],["result",6]]],[11,"fmt","","",31,[[["formatter",3]],["result",6]]],[11,"fmt","pravega_client::sync::table","",37,[[["formatter",3]],["result",6]]],[11,"fmt","pravega_client::event::reader_group","",10,[[["formatter",3]],["result",6]]],[11,"fmt","pravega_client::event::transactional_writer","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",17,[[["formatter",3]],["result",6]]],[11,"fmt","pravega_client::sync::synchronizer","",25,[[["formatter",3]],["result",6]]],[11,"fmt","pravega_client::sync::table","",37,[[["formatter",3]],["result",6]]],[11,"hash","pravega_client::sync::synchronizer","",30,[[]]],[11,"description","pravega_client::event::reader_group","",10,[[],["str",15]]],[11,"cause","","",10,[[],[["option",4],["error",8]]]],[11,"source","","",10,[[],[["error",8],["option",4]]]],[11,"description","pravega_client::event::transactional_writer","",14,[[],["str",15]]],[11,"cause","","",14,[[],[["option",4],["error",8]]]],[11,"source","","",14,[[],[["error",8],["option",4]]]],[11,"description","","",17,[[],["str",15]]],[11,"cause","","",17,[[],[["option",4],["error",8]]]],[11,"source","","",17,[[],[["error",8],["option",4]]]],[11,"description","pravega_client::sync::synchronizer","",25,[[],["str",15]]],[11,"cause","","",25,[[],[["option",4],["error",8]]]],[11,"source","","",25,[[],[["error",8],["option",4]]]],[11,"description","pravega_client::sync::table","",37,[[],["str",15]]],[11,"cause","","",37,[[],[["option",4],["error",8]]]],[11,"source","","",37,[[],[["error",8],["option",4]]]],[11,"read","pravega_client::byte","",1,[[],[["usize",15],["result",4],["error",3]]]],[11,"seek","","",1,[[["seekfrom",4]],[["result",6],["u64",15]]]],[11,"write","","Writes the given data to the server. It doesn\'t mean the …",0,[[],[["usize",15],["result",4],["error",3]]]],[11,"flush","","This is a blocking call that will wait for data to be …",0,[[],[["result",4],["error",3]]]],[11,"deserialize","pravega_client::event::reader_group","",8,[[],["result",4]]],[11,"deserialize","pravega_client::sync::synchronizer","",31,[[],["result",4]]],[11,"serialize","pravega_client::event::reader_group","",8,[[],["result",4]]],[11,"serialize","pravega_client::sync::synchronizer","",31,[[],["result",4]]],[11,"backtrace","pravega_client::event::reader_group","",10,[[],[["backtrace",3],["option",4]]]],[11,"backtrace","pravega_client::event::transactional_writer","",14,[[],[["backtrace",3],["option",4]]]],[11,"backtrace","","",17,[[],[["backtrace",3],["option",4]]]],[11,"backtrace","pravega_client::sync::synchronizer","",25,[[],[["backtrace",3],["option",4]]]],[11,"backtrace","pravega_client::sync::table","",37,[[],[["backtrace",3],["option",4]]]]],"p":[[3,"ByteWriter"],[3,"ByteReader"],[3,"ClientFactory"],[3,"EventReader"],[3,"Event"],[3,"SegmentSlice"],[3,"SliceMetadata"],[3,"ReaderGroup"],[3,"ReaderGroupConfig"],[3,"ReaderGroupConfigBuilder"],[4,"SerdeError"],[13,"Cbor"],[3,"TransactionalEventWriter"],[3,"Transaction"],[4,"TransactionalEventWriterError"],[13,"PingerError"],[13,"TxnStreamControllerError"],[4,"TransactionError"],[13,"TxnSegmentWriterError"],[13,"TxnStreamWriterError"],[13,"TxnClosed"],[13,"TxnControllerError"],[13,"TxnCommitError"],[13,"TxnAbortError"],[3,"EventWriter"],[4,"SynchronizerError"],[13,"SyncTableError"],[13,"SyncUpdateError"],[13,"SyncTombstoneError"],[3,"Synchronizer"],[3,"Key"],[3,"Value"],[3,"Update"],[3,"Insert"],[3,"Remove"],[8,"ValueClone"],[8,"ValueSerialize"],[4,"TableError"],[13,"ConnectionError"],[13,"KeyDoesNotExist"],[13,"IncorrectKeyVersion"],[13,"OperationError"],[3,"Table"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);