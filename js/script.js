var stringLabels=["F#","D#","G#","E","B","G#","F#","E","D","B"];

	// String:fret position relative to root note (root=0)
	var patterns = new Array();
	
	var pattern = new Array();
	pattern[0] = "4:0:,6:0:"; 
	pattern[1] = "3:-2:,5:-2:";
	pattern[2] = "3:0:,5:0:"; 
	pattern[3] = "3:0:B,5:0:A"; 
	pattern[4] = "3:2:B,5:2:A"; 
	pattern[5] = "3:5:,5:5:"; 
	pattern[6] = "3:7:,5:7:"; 
	pattern[7] = "3:7:B,5:7:A"; 
	patterns[0] = pattern;
	
	var pattern = new Array();
	pattern[0] = "4:0:,5:0:,6:0:"; 
	pattern[1] = "3:-2:,4:-2:E,5:-2:";
	pattern[2] = "3:0:,4:0:E,5:0:"; 
	pattern[3] = "3:0:B,4:0:,5:0:A"; 
	pattern[4] = "3:2:B,4:2:,5:2:A"; 
	pattern[5] = "3:5:,4:5:,5:5:"; 
	pattern[6] = "3:7:,4:7:,5:7:"; 
	pattern[7] = "3:7:B,4:7:,5:7:A"; 
	patterns[1] = pattern;
	
	var pattern = new Array();
	pattern[0] = "8:0:"; 
	pattern[1] = "7:0:"; 
	pattern[2] = "6:0:"; 
	pattern[3] = "6:0:B"; 
	pattern[4] = "5:0:"; 
	pattern[5] = "5:0:A"; 
	pattern[6] = "2:0:"; 
	pattern[7] = "4:0:"; 
	patterns[2] = pattern;
	
	var pattern = new Array();
	pattern[0] = "8:0:"; 
	pattern[1] = "7:0:"; 
	pattern[2] = "6:0:"; 
	pattern[3] = "6:0:B"; 
	pattern[4] = "5:0:"; 
	pattern[5] = "5:0:A"; 
	pattern[6] = "4:0:E"; 
	pattern[7] = "4:0:"; 
	patterns[3] = pattern;
	
	var pattern = new Array();
	pattern[0] = "6:0:,8:0:"; 
	pattern[1] = "6:0:B,7:0:"; 
	pattern[2] = "5:0:,6:0:"; 
	pattern[3] = "5:0:A,6:0:B"; 
	pattern[4] = "4:0:E,5:0:"; 
	pattern[5] = "4:0:A,5:0:B"; 
	pattern[6] = "4:2:A,5:2:B"; 
	pattern[7] = "2:0:,3:0:"; 
	patterns[4] = pattern;
	
	var pattern = new Array();
	pattern[0] = "3:0:,4:0:,5:0:"; 
	pattern[1] = "3:0:B,4:0:C,5:0:C";
	pattern[2] = "3:2:B,4:2:C,5:2:C"; 
	pattern[3] = "3:5:,4:5:,5:5:"; 
	pattern[4] = "3:7:,4:7:,5:7:"; 
	pattern[5] = "3:7:B,4:7:C,5:7:C"; 
	pattern[6] = "3:10:,4:10:F,5:10:"; 
	pattern[7] = "3:12:,4:12:,5:12:"; 
	patterns[5] = pattern;
	
	var pattern = new Array();
	pattern[0] = "10:5:"; 
	pattern[1] = "10:5:A"; 
	pattern[2] = "10:7:A"; 
	pattern[3] = "9:7:"; 
	pattern[4] = "8:7:"; 
	pattern[5] = "7:7:"; 
	pattern[6] = "6:7:"; 
	pattern[7] = "6:7:B"; 
	pattern[8] = "5:7:"; 
	pattern[9] = "5:7:A"; 
	pattern[10] = "5:8:A"; 
	pattern[11] = "4:7:"; 
	pattern[12] = "1:7:"; 
	pattern[13] = "3:7:"; 
	pattern[14] = "3:7:B"; 
	patterns[6] = pattern;
	
	
	var pattern = new Array();
	pattern[0] = "5:5:,8:5:E"; 
	pattern[1] = "5:5:A,8:5:"; 
	pattern[2] = "5:7:A,8:7:"; 
	pattern[3] = "5:8:A,8:8:F"; 
	pattern[4] = "5:10:A,8:10:"; 
	pattern[5] = "5:12:A,8:12:"; 
	pattern[6] = "5:13:A,8:13:F"; 
	pattern[7] = "5:15:A,8:15:F"; 
	pattern[8] = "5:12:A,8:12:"; 
	patterns[7] = pattern;
	
	var pattern = new Array();
	pattern[0] = "5:5:,8:5:E"; 
	pattern[1] = "5:5:A,8:5:";
	pattern[2] = "5:7:A,8:7:"; 
	pattern[3] = "5:8:A,8:8:F"; 
	pattern[4] = "5:10:A,8:10:F"; 
	pattern[5] = "5:12:A,8:12:"; 
	pattern[6] = "5:14:A,8:14:"; 
	pattern[7] = "5:15:A,8:15:F"; 
	patterns[8] = pattern;
	
	var pattern = new Array();
	pattern[0] = "5:5:,8:5:E"; 
	pattern[1] = "5:5:A,8:5:";
	pattern[2] = "5:7:A,8:7:"; 
	pattern[3] = "5:10:,8:10:E"; 
	pattern[4] = "5:12:,8:12:E"; 
	pattern[5] = "5:12:A,8:12:"; 
	pattern[6] = "5:14:A,8:14:"; 
	pattern[7] = "5:15:A,8:15:F"; 
	patterns[9] = pattern;
	
	var pattern = new Array();
	pattern[0] = "8:0:"; 
	pattern[1] = "7:0:"; 
	pattern[2] = "6:0:"; 
	pattern[3] = "6:0:B"; 
	pattern[4] = "8:7:"; 
	pattern[5] = "7:7:"; 
	pattern[6] = "6:7:"; 
	pattern[7] = "6:7:B"; 
	patterns[10] = pattern;
	
	var pattern = new Array();
	pattern[0] = "8:0:"; 
	pattern[1] = "7:0:"; 
	pattern[2] = "7:1:"; 
	pattern[3] = "6:1:"; 
	pattern[4] = "5:0:"; 
	pattern[5] = "5:0:A"; 
	pattern[6] = "5:1:A"; 
	pattern[7] = "4:0:"; 
	patterns[11] = pattern;
	
	var pattern = new Array();
	pattern[0] = "8:0:"; 
	pattern[1] = "7:0:"; 
	pattern[2] = "7:1:"; 
	pattern[3] = "6:1:"; 
	pattern[4] = "8:7:"; 
	pattern[5] = "7:7:"; 
	pattern[6] = "7:8:"; 
	pattern[7] = "6:8:"; 
	patterns[12] = pattern;
	
	function generateTable()
	{
		var chosenKey = document.getElementById('key').value;
		var chosenScale = document.getElementById('scale_select').value;
		var tbl = document.getElementById('fretboardTable');

		while(tbl.rows.length>0){  tbl.deleteRow(tbl.rows.length-1);  } 

		var pattern = patterns[chosenScale];
		
		// determine the "offset"
		// the offset is so we dont start too high on the neck for some keys
		var offset = 0; 
		var leftMostFret = 10000;
		for(var j=0; j<pattern.length; j++)
		{
			var splitResult = pattern[j].split(",");
			for(var k =0; k < splitResult.length;k++)
			{
				var curNote = splitResult[k];
				var splitResult2 = curNote.split(":");
				var curFretNumber = splitResult2[1];
				
				if((parseInt(curFretNumber) + parseInt(chosenKey)) < leftMostFret)
				{
					leftMostFret = parseInt(curFretNumber) + parseInt(chosenKey);
				}
			}
		}
		if(leftMostFret >= 13)
		{
			offset = -12;
		}
		
		
		for(var i=0; i < 10; ++i)
		{
			var row = tbl.insertRow(i);
			var cell = row.insertCell(0);
			cell.style.width = "50px";
			cell.align="center";
			cell.innerHTML = i+1;
			
			var cell = row.insertCell(1);
			cell.innerHTML = stringLabels[i];
			cell.style.width = "50px";
			cell.align="center";
			cell.style.backgroundColor="blue";
			
			for(var j=0; j<pattern.length; j++)
			{
				var cell = row.insertCell(row.cells.length);
				cell.innerHTML = "&nbsp;";
				cell.style.width = "50px";
				cell.align="center";
				
				var splitResult = pattern[j].split(",");
				for(var k =0; k < splitResult.length;k++)
				{
					var curNote = splitResult[k];
					var splitResult2 = curNote.split(":");
					var curStringNumber = splitResult2[0];
					var curFretNumber = splitResult2[1];
					var curPedalOrLever = splitResult2[2];
					
					
					if( (curStringNumber==(i+1))  )
					{
						var adjustedFretNumber = parseInt(curFretNumber) + parseInt(chosenKey) + offset;
						cell.innerHTML = adjustedFretNumber + " " + curPedalOrLever;
						if(j==0 || j==7 || j==14)
						{
							cell.innerHTML = "<font color='red'>" + adjustedFretNumber + " " + curPedalOrLever + "</font>";
						}
					}
				}
			}
			
			/*
			for(var j=2;j < 26; ++j)
			{
				var cell = row.insertCell(j);
				cell.innerHTML = i + "-" + j;
			}*/
		}
	}
	
	$(document).ready(function(){
		generateTable();
	});