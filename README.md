# Set-Up Environment

	# Copy template to geany config
	
	cd templates
	cp cplus.cpp ~/.config/geany/templates/files/
	
	# Edit Build Command
	g++ -std=c++11 -O2 -Wall test.cpp -o test
